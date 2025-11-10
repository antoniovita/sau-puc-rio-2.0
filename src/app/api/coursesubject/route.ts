import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

//  GET: Consultar as matérias associadas a um curso, ou buscar por nome da matéria
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const courseId = url.searchParams.get('courseId'); 
    const subjectName = url.searchParams.get('subjectName'); 

    if (!courseId && !subjectName) {
      return new Response(JSON.stringify({ error: 'courseId ou subjectName é obrigatório' }), { status: 400 });
    }

    let course;

    if (courseId) {
      course = await prisma.course.findUnique({
        where: { id: String(courseId) },
        include: {
          subjects: {
            select: {
              subject: {
                select: {
                  id: true,    // ID da matéria
                  name: true,  // Nome da matéria
                },
              },
              type: true,   // Tipo da matéria (OBRIGATORIA, OPTATIVA, etc.)
              course: {
                select: {
                  id: true,    // ID do curso
                  name: true,  // Nome do curso
                },
              },
            },
          },
        },
      });
    } else if (subjectName) {
      course = await prisma.course.findMany({
        include: {
          subjects: {
            where: {
              subject: {
                name: {
                  contains: subjectName, // Busca o nome da matéria que contém o texto fornecido
                  mode: 'insensitive',  // Tornando a busca insensível a maiúsculas/minúsculas
                },
              },
            },
            select: {
              subject: {
                select: {
                  id: true,    // ID matéria
                  name: true,  // Nome matéria
                },
              },
              type: true, // Tipo matéria
              course: {
                select: {
                  id: true, // ID curso
                  name: true,// Nome curso
                },
              },
            },
          },
        },
      });
    }

    // Verificando se o curso foi encontrado
    if (!course || (Array.isArray(course) && course.length === 0)) {
      return new Response(JSON.stringify({ error: 'Curso ou matéria não encontrado' }), { status: 404 });
    }

    // Criando a resposta com os dados do curso e das matérias associadas
    const result = (Array.isArray(course) ? course : [course]).flatMap((courseItem) =>
      courseItem.subjects.map((courseSubject) => ({
        courseId: courseSubject.course.id,        
        courseName: courseSubject.course.name,    
        subjectId: courseSubject.subject.id,    
        subjectName: courseSubject.subject.name, 
        type: courseSubject.type,                 
      }))
    );

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erro ao buscar disciplinas do curso' }), { status: 500 });
  }
}

//  POST: Criar os relacionamentos entre curso e matérias
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, subjectIds } = body; // courseId e subjectIds do corpo da requisição

    // Verificando se o curso existe
    const course = await prisma.course.findUnique({
      where: { id: String(courseId) },
    });

    if (!course) {
      return new Response(JSON.stringify({ error: 'Curso não encontrado' }), { status: 404 });
    }

    // Para cada subjectId, verificamos se a matéria existe e associamos
    const courseSubjects = await prisma.courseSubject.createMany({
      data: await Promise.all(
        subjectIds.map(async (subject: { subjectId: string; subjectName: string; type: string }) => {
          // Verificar se a matéria com subjectId existe, ou criar a associação
          const subjectRecord = await prisma.subject.findUnique({
            where: { id: subject.subjectId },
          });

          if (!subjectRecord) {
            return { error: `Matéria com ID ${subject.subjectId} não encontrada` };
          }

          // Criando o relacionamento entre o curso e a matéria
          return {
            courseId: course.id,
            subjectId: subject.subjectId,
            type: subject.type, 
          };
        })
      ),
    });

    return new Response(JSON.stringify(courseSubjects), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erro ao criar relação curso-disciplina' }), { status: 500 });
  }
}