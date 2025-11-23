const { PrismaClient, SubjectType } = require('@prisma/client')

const prisma = new PrismaClient()

const matriz = [
  { periodo: 2, tipo: 'OC', codigo: 'INF1037', nome: 'PROGRAMACAO EM C', creditos: 4 },
  { periodo: 2, tipo: 'OC', codigo: 'INF1039', nome: 'PROJETOS: APLICA INTERATIVAS', creditos: 4 },
  { periodo: 2, tipo: 'OC', codigo: 'INF1403', nome: 'INTR INT HUMANO-COMPUTADOR', creditos: 4 },
  { periodo: 2, tipo: 'OC', codigo: 'MAT4161', nome: 'CÁLCULO A UMA VARIÁVEL', creditos: 6 },
  { periodo: 2, tipo: 'OC', codigo: 'MAT4200', nome: 'ÁLGEBRA LINEAR I', creditos: 4 },

  { periodo: 3, tipo: 'PR', codigo: 'CRE0712', nome: 'OPTATIVAS DE CRISTIANISMO', creditos: 4 },
  { periodo: 3, tipo: 'OC', codigo: 'INF1010', nome: 'ESTRUTURAS DE DADOS AVANCADAS', creditos: 4 },
  { periodo: 3, tipo: 'OC', codigo: 'INF1018', nome: 'SOFTWARE BASICO', creditos: 4 },
  { periodo: 3, tipo: 'OC', codigo: 'INF1040', nome: 'PROJ PROG MODULAR', creditos: 4 },
  { periodo: 3, tipo: 'OC', codigo: 'INF1383', nome: 'BANCOS DE DADOS', creditos: 4 },
  { periodo: 3, tipo: 'OC', codigo: 'MAT4162', nome: 'CÁLCULO A VÁRIAS VARIÁVEIS I', creditos: 4 },

  { periodo: 4, tipo: 'OC', codigo: 'INF1027', nome: 'TESTE E MEDICAO DE SOFTWARE', creditos: 4 },
  { periodo: 4, tipo: 'OC', codigo: 'INF1032', nome: 'INTRODUCAO A CIENCIA DOS DADOS', creditos: 4 },
  { periodo: 4, tipo: 'OC', codigo: 'INF1041', nome: 'ENGENHARIA DE SOFTWARE', creditos: 4 },
  { periodo: 4, tipo: 'OC', codigo: 'INF1316', nome: 'SISTEMAS OPERACIONAIS', creditos: 4 },
  { periodo: 4, tipo: 'OC', codigo: 'INF1636', nome: 'PROGRAMACAO ORIENTADA OBJETOS', creditos: 4 },
  { periodo: 4, tipo: 'OC', codigo: 'MAT1320', nome: 'INTRODUCAO MATEMATICA DISCRETA', creditos: 4 },
  { periodo: 4, tipo: 'OC', codigo: 'MAT4202', nome: 'ÁLGEBRA LINEAR II', creditos: 4 },

  { periodo: 5, tipo: 'OR', codigo: 'CRE1241', nome: 'ÉTICA CRISTÃ', creditos: 2 },
  { periodo: 5, tipo: 'PC', codigo: 'INF0377', nome: 'OPT DE PROBABILIDADE E ESTATIS', creditos: 4 },
  { periodo: 5, tipo: 'OC', codigo: 'INF1022', nome: 'ANALIS LEXICOS E SINTATICOS', creditos: 4 },
  { periodo: 5, tipo: 'OC', codigo: 'INF1029', nome: 'INT ARQUITETURA COMPUTADORES', creditos: 4 },
  { periodo: 5, tipo: 'OC', codigo: 'INF1631', nome: 'ESTRUTURAS DISCRETAS', creditos: 4 },
  { periodo: 5, tipo: 'OC', codigo: 'INF1643', nome: 'REDES DE COMUNICAÇÃO DE DADOS', creditos: 4 },
  { periodo: 5, tipo: 'OC', codigo: 'INF1771', nome: 'INTELIGENCIA ARTIFICIAL', creditos: 4 },

  { periodo: 6, tipo: 'OR', codigo: 'CRE1275', nome: 'ETICA SOCIOAMBIENT DIR HUMANOS', creditos: 2 },
  { periodo: 6, tipo: 'PC', codigo: 'INF0400', nome: 'OPTATIVAS DE CIÊNCIAS DA COMPU', creditos: 4 },
  { periodo: 6, tipo: 'OC', codigo: 'INF1014', nome: 'SEMINARIOS', creditos: 1 },
  { periodo: 6, tipo: 'OC', codigo: 'INF1045', nome: 'PROJETO E CONSTRUÇÃO SISTEMAS', creditos: 6 },
  { periodo: 6, tipo: 'OC', codigo: 'INF1416', nome: 'SEGURANCA DA INFORMACAO', creditos: 4 },
  { periodo: 6, tipo: 'OC', codigo: 'INF1721', nome: 'ANALISE DE ALGORITMOS', creditos: 4 },
  { periodo: 6, tipo: 'OC', codigo: 'INF1920', nome: 'ESTAGIO SUPERVISIONADO', creditos: 1 },

  { periodo: 7, tipo: 'PC', codigo: 'INF0308', nome: 'OPTATIVAS DE PROGRAMACAO AVANC', creditos: 4 },
  { periodo: 7, tipo: 'PC', codigo: 'INF0401', nome: 'OPTATIVAS DE CIÊNCIAS DA COMPU', creditos: 4 },
  { periodo: 7, tipo: 'OC', codigo: 'INF1015', nome: 'COMPUTABILIDADE', creditos: 4 },
  { periodo: 7, tipo: 'OC', codigo: 'INF1950', nome: 'PROJETO FINAL I', creditos: 2 },
  { periodo: 7, tipo: 'PC', codigo: 'JUR0205', nome: 'OPTATIVAS DE DIREITO PARA CTC', creditos: 2 },

  { periodo: 8, tipo: 'PB', codigo: 'FIL0300', nome: 'OPTATIVAS FILOSOFIA-CB/CTC', creditos: 4 },
  { periodo: 8, tipo: 'OC', codigo: 'INF1951', nome: 'PROJETO FINAL II', creditos: 2 },

  { periodo: 20, tipo: 'AC', codigo: 'ACP0900', nome: 'ATIVIDADES COMPLEMENTARES', creditos: 10 },
  { periodo: 20, tipo: 'EL', codigo: 'ELL0900', nome: 'ELET LIVRES-DENTRO/FORA DEPT', creditos: 8 },
  { periodo: 20, tipo: 'EO', codigo: 'ELO0900', nome: 'ELETIVAS DE ORIENTACAO', creditos: 16 },
  { periodo: 20, tipo: 'PC', codigo: 'EXT0100', nome: 'OPTATIVAS DE EXTENSAO', creditos: 12 },
]

function mapTipoToSubjectType(tipo) {
  switch (tipo) {
    case 'OC':
    case 'OR':
      return SubjectType.OBRIGATORIA
    case 'EL':
    case 'EO':
      return SubjectType.ELETIVA
    case 'PR':
    case 'PC':
    case 'PB':
    case 'AC':
    default:
      return SubjectType.OPTATIVA
  }
}

async function main() {

  await prisma.grade.deleteMany()
  await prisma.assessment.deleteMany()
  await prisma.absence.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.history.deleteMany()
  await prisma.domainSubject.deleteMany()
  await prisma.domainUser.deleteMany()
  await prisma.domain.deleteMany()
  await prisma.group.deleteMany()
  await prisma.courseSubject.deleteMany()
  await prisma.subject.deleteMany()
  await prisma.course.deleteMany()

  const course = await prisma.course.upsert({
    where: { code: 'CCOMP' },
    update: {},
    create: {
      id: 'course-cc',
      name: 'Ciência da Computação',
      code: 'CCOMP',
    },
  })

  await prisma.subject.createMany({
    data: matriz.map((d) => ({
      id: d.codigo,
      name: `${d.codigo} - ${d.nome}`,
      creditos: d.creditos,
      nivelamento: false,
    })),
    skipDuplicates: true,
  })

  await prisma.courseSubject.createMany({
    data: matriz.map((d) => ({
      id: `cs-${d.codigo.toLowerCase()}`,
      courseId: course.id,
      subjectId: d.codigo,
      type: mapTipoToSubjectType(d.tipo),
    })),
    skipDuplicates: true,
  })

  const profAna = await prisma.user.upsert({
    where: { cpf: '11111111111' },
    update: {},
    create: {
      name: 'Ana Paula',
      cpf: '11111111111',
      email: 'ana.prof@uni.test',
      matricula: 'P001',
      professor: true,
      password: 'senha123',
      adm: true,
    },
  })

  const profCarlos = await prisma.user.upsert({
    where: { cpf: '22222222222' },
    update: {},
    create: {
      name: 'Carlos Silva',
      cpf: '22222222222',
      email: 'carlos.prof@uni.test',
      matricula: 'P002',
      professor: true,
      password: 'senha123',
      adm: false,
    },
  })

  const alunoJoao = await prisma.user.upsert({
    where: { cpf: '33333333333' },
    update: {},
    create: {
      name: 'João Souza',
      cpf: '33333333333',
      email: 'joao.aluno@uni.test',
      matricula: 'A001',
      professor: false,
      password: 'senha123',
      adm: false,
    },
  })

  const alunoMaria = await prisma.user.upsert({
    where: { cpf: '44444444444' },
    update: {},
    create: {
      name: 'Maria Oliveira',
      cpf: '44444444444',
      email: 'maria.aluno@uni.test',
      matricula: 'A002',
      professor: false,
      password: 'senha123',
      adm: false,
    },
  })

  const alunoLucas = await prisma.user.upsert({
    where: { cpf: '55555555555' },
    update: {},
    create: {
      name: 'Lucas Lima',
      cpf: '55555555555',
      email: 'lucas.aluno@uni.test',
      matricula: 'A003',
      professor: false,
      password: 'senha123',
      adm: false,
    },
  })

  const groupsData = matriz.map((d) => ({
    id: `grp-${d.codigo.toLowerCase()}`,
    code: `${d.codigo}-A`,
    periodo: d.periodo.toString(),
    room: `Sala ${d.periodo}01`,
    vagas: 40,
    startTime: '08:00',
    endTime: '09:40',
    days: ['SEG', 'QUA'],
    subjectId: d.codigo,
    professorId: d.codigo.startsWith('INF') ? profAna.id : profCarlos.id,
  }))

  await prisma.group.createMany({
    data: groupsData,
    skipDuplicates: true,
  })

  const students = [alunoJoao, alunoMaria, alunoLucas]
  const codigosParaMatricular = ['INF1037', 'INF1383', 'INF1643', 'INF1950', 'INF1951']

  const enrollmentsData = []
  for (const student of students) {
    for (const codigo of codigosParaMatricular) {
      enrollmentsData.push({
        userId: student.id,
        groupId: `grp-${codigo.toLowerCase()}`,
        status: 'ATIVA',
        finalGrade: null,
        attendance: null,
      })
    }
  }

  await prisma.enrollment.createMany({
    data: enrollmentsData,
    skipDuplicates: true,
  })

  await prisma.history.createMany({
    data: [
      { userId: alunoJoao.id, ira: 8.2, creditosAprovados: 40 },
      { userId: alunoMaria.id, ira: 9.1, creditosAprovados: 52 },
      { userId: alunoLucas.id, ira: 7.5, creditosAprovados: 32 },
    ],
    skipDuplicates: true,
  })

  const domDS = await prisma.domain.create({
    data: {
      name: 'Ciência de Dados',
      description: 'Trilha de Data Science.',
    },
  })

  const domWeb = await prisma.domain.create({
    data: {
      name: 'Desenvolvimento Web',
      description: 'Trilha de desenvolvimento web.',
    },
  })

  await prisma.domainSubject.createMany({
    data: [
      { domainId: domDS.id, subjectId: 'INF1383' },
      { domainId: domDS.id, subjectId: 'INF1032' },
      { domainId: domWeb.id, subjectId: 'INF1039' },
      { domainId: domWeb.id, subjectId: 'INF1636' },
    ],
    skipDuplicates: true,
  })

  await prisma.domainUser.createMany({
    data: [
      { domainId: domDS.id, userId: alunoJoao.id, completedCredits: 4 },
      { domainId: domWeb.id, userId: alunoMaria.id, completedCredits: 0 },
      { domainId: domWeb.id, userId: profAna.id, completedCredits: 0 },
    ],
    skipDuplicates: true,
  })

  const today = new Date()
  await prisma.absence.createMany({
    data: [
      {
        date: today,
        hoursMissed: 2,
        justified: false,
        justification: null,
        userId: alunoJoao.id,
        groupId: 'grp-inf1037',
      },
      {
        date: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000),
        hoursMissed: 1.5,
        justified: true,
        justification: 'Atestado médico',
        userId: alunoMaria.id,
        groupId: 'grp-inf1383',
      },
    ],
  })

  await prisma.assessment.create({
    data: {
      description: 'Prova 1 - PROGRAMACAO EM C',
      totalWeight: 100,
      userId: alunoJoao.id,
      groupId: 'grp-inf1037',
      grades: {
        create: [{ value: 8.5, ordem: 1, weight: 100 }],
      },
    },
  })

  await prisma.assessment.create({
    data: {
      description: 'Avaliação - BANCOS DE DADOS',
      totalWeight: 100,
      userId: alunoMaria.id,
      groupId: 'grp-inf1383',
      grades: {
        create: [
          { value: 9.0, ordem: 1, weight: 60 },
          { value: 10.0, ordem: 2, weight: 40 },
        ],
      },
    },
  })

}

main()
  .catch((e) => {
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
