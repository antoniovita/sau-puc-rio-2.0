import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const createSubjectSchema = z.object({
  name: z.string().min(1, "O nome da disciplina é obrigatório"),
  creditos: z.number().int().min(1, "Créditos devem ser maiores que 0"),
  nivelamento: z.boolean().default(false),
});

const updateSubjectSchema = z.object({
  name: z.string().min(1).optional(),
  creditos: z.number().int().min(1).optional(),
  nivelamento: z.boolean().optional(),
});

export async function GET() {
  try {
    const subjects = await prisma.subject.findMany({
      include: {
        groups: true,
        courseLinks: true,
        prerequisites: true,
        requiredBy: true,
        domains: true,
      },
    });
    return NextResponse.json(subjects);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar disciplinas" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = createSubjectSchema.parse(body);

    const subject = await prisma.subject.create({ data });
    return NextResponse.json(subject, { status: 201 });
  } catch (error: any) {
    console.error(error);
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Dados inválidos", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Erro ao criar disciplina" },
      { status: 500 }
    );
  }
}
