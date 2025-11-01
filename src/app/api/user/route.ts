import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
  name: z.string().min(2, "Nome muito curto."),
  cpf: z.string().min(11).max(14).transform((s) => s.replace(/\D/g, "")),
  email: z.string().email(),
  matricula: z.string().min(1),
  professor: z.union([z.boolean(), z.string()]).transform((v) =>
    typeof v === "boolean" ? v : v === "true" || v === "1"
  ),
  password: z.string().min(6),
});

type AuthPayload = {
  id: string;
  email: string;
  professor: boolean;
  adm: boolean;
};

// cria o usuario e retorna um jwt
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = userSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Dados inválidos.", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, cpf, email, matricula, professor, password } = parsed.data;

    // unicidade
    const existing = await prisma.user.findFirst({
      where: { OR: [{ cpf }, { matricula }, { email }] },
      select: { id: true },
    });
    if (existing) {
      return NextResponse.json(
        { message: "Já existe um usuário com este CPF, matrícula ou e-mail." },
        { status: 409 }
      );
    }

    // hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // cria com adm = false por padrão (não permita setar via body)
    const user = await prisma.user.create({
      data: { name, cpf, email, matricula, professor, password: hashedPassword },
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        matricula: true,
        professor: true,
        adm: true, // <-- seleciona para ir ao token e resposta
      },
    });

    // JWT inclui 'adm'
    const token = jwt.sign(
      { id: user.id, email: user.email, professor: user.professor, adm: user.adm } as AuthPayload,
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    const res = NextResponse.json({ message: "Usuário criado!", user, token }, { status: 201 });
    res.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 });
  }
}

// pega todos os usuários — o middleware já garante 'adm', então sem checagem aqui
export async function GET(req: NextRequest) {
  try {
    const { search, page = "1", limit = "20" } = Object.fromEntries(req.nextUrl.searchParams);
    const pageNum = Math.max(1, parseInt(page as string, 10) || 1);
    const take = Math.min(100, Math.max(1, parseInt(limit as string, 10) || 20));
    const skip = (pageNum - 1) * take;

    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { cpf: { contains: search } },
            { matricula: { contains: search } },
          ],
        }
      : {};

    const [items, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: { name: "asc" },
        select: {
          id: true,
          name: true,
          cpf: true,
          email: true,
          matricula: true,
          professor: true,
          adm: true,
        },
      }),
      prisma.user.count({ where }),
    ]);

    return NextResponse.json({ page: pageNum, limit: take, total, items });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Erro interno no servidor." }, { status: 500 });
  }
}
