import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET /api/course
 * Retorna todas as turmas (courses) com subject e professor associados
 */
export async function GET() {
  try {
    const courses = await prisma.group.findMany({
      include: {
        subject: true,
        professor: true,
      },
    });
    return NextResponse.json(courses);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao buscar cursos" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/course
 * Cria uma nova turma
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      code,
      periodo,
      room,
      vagas,
      startTime,
      endTime,
      days,
      subjectId,
      professorId,
    } = body;

    const newCourse = await prisma.group.create({
      data: {
        code,
        periodo,
        room,
        vagas,
        startTime,
        endTime,
        days,
        subjectId,
        professorId,
      },
    });

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao criar curso" },
      { status: 500 }
    );
  }
}
