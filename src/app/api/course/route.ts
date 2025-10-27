import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET /api/course
 * Retorna todas as turmas  com materias e professor associados
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
    const { code, name, subjectIds } = body; //subjectIds será um conjuntos de materias obrigatorias que compoem o curso

    // Criação do curso
    const newCourse = await prisma.course.create({
      data: {
        code,
        name,
      },
    });

    // cada subjectId cria um relacionamento na tabela CourseSubject
    const courseSubjects = subjectIds.map((subjectId: string) => ({
      courseId: newCourse.id,
      subjectId,
      type, 
    }));

    // relacionamentos entre Curso e Subjects
    await prisma.courseSubject.createMany({
      data: courseSubjects,
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
