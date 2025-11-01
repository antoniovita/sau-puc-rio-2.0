import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { EnrollmentStatus } from "@/generated/prisma";
import { z } from "zod";

const prisma = new PrismaClient();

const createEnrollmentSchema = z.object({
  userId: z.string().uuid({ message: "userId deve ser um UUID válido" }),
  groupId: z.string().uuid({ message: "groupId deve ser um UUID válido" }),
  status: z.nativeEnum(EnrollmentStatus).default("ATIVA"),
  finalGrade: z.number().min(0).max(10).optional(),
  attendance: z.number().min(0).max(100).optional(),
});

const updateEnrollmentSchema = z.object({
  status: z.nativeEnum(EnrollmentStatus).optional(),
  finalGrade: z.number().min(0).max(10).optional(),
  attendance: z.number().min(0).max(100).optional(),
});

// GET – lista todas as matrículas
export async function GET() {
  try {
    const enrollments = await prisma.enrollment.findMany({
      include: { user: true, group: true },
    });
    return NextResponse.json(enrollments);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao buscar matrículas" }, { status: 500 });
  }
}

// POST – cria nova matrícula
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = createEnrollmentSchema.parse(body);

    const enrollment = await prisma.enrollment.create({ data });
    return NextResponse.json(enrollment, { status: 201 });
  } catch (error: any) {
    console.error(error);
    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Dados inválidos", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Erro ao criar matrícula" }, { status: 500 });
  }
}
