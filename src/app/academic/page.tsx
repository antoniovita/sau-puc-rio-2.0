"use client"
import { DisciplinasCard, DisciplinasTable, NivelamentosTable, Selector } from '@/components';
import React, { useState, useMemo } from 'react';

const disciplinasData = [
  {
    codigo: 'INF1037',
    tipo: 'OP',
    creditos: 6,
    turma: '3WA',
    situacao: '3WA',
    grau: 8.6
  },
  {
    codigo: 'INF1037',
    tipo: 'OP',
    creditos: 6,
    turma: '3WA',
    situacao: '3WA',
    grau: 8.6
  },
  {
    codigo: 'INF1037',
    tipo: 'OP',
    creditos: 6,
    turma: '3WA',
    situacao: '3WA',
    grau: 8.6
  },
  {
    codigo: 'INF1037',
    tipo: 'OP',
    creditos: 6,
    turma: '3WA',
    situacao: '3WA',
    grau: 8.6
  },
  {
    codigo: 'INF1037',
    tipo: 'OP',
    creditos: 6,
    turma: '3WA',
    situacao: '3WA',
    grau: 8.6
  },
];

export default function Academic() {
  const [selectedYear, setSelectedYear] = useState('2025.1');
  const years = ['2025.1', '2025.2', '2024.2'];

  const statistics = useMemo(() => {
    const totalDisciplinas = disciplinasData.length;
    const totalCreditos = disciplinasData.reduce((sum, d) => sum + d.creditos, 0);
    const mediaGeral = (disciplinasData.reduce((sum, d) => sum + d.grau, 0) / totalDisciplinas).toFixed(1);
    
    return { totalDisciplinas, totalCreditos, mediaGeral };
  }, []);

  const progressoCurso = useMemo(() => {
    const creditosCumpridos = 90;
    const creditosTotal = 180;
    
    return { creditosCumpridos, creditosTotal };
  }, []);

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Vida acadêmica
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            Visualize seu desempenho e acompanhe seu progresso
          </p>
          <Selector 
            selections={years} 
            selectedThing={selectedYear} 
            onSelect={setSelectedYear} 
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Total de Disciplinas</div>
            <div className="text-2xl font-bold text-slate-800">{statistics.totalDisciplinas}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Total de Créditos</div>
            <div className="text-2xl font-bold text-black">{statistics.totalCreditos}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Média Geral</div>
            <div className="text-2xl font-bold text-black">{statistics.mediaGeral}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Taxa de Aprovação</div>
            <div className="text-2xl font-bold text-black">100%</div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-semibold text-slate-800">Progresso do Curso</div>
            <div className="text-sm font-medium text-gray-600">
              {Math.round((progressoCurso.creditosCumpridos / progressoCurso.creditosTotal) * 100)}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(progressoCurso.creditosCumpridos / progressoCurso.creditosTotal) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>{progressoCurso.creditosCumpridos} créditos concluídos</span>
            <span>{progressoCurso.creditosTotal - progressoCurso.creditosCumpridos} créditos restantes</span>
          </div>
        </div>

        <DisciplinasTable disciplinas={disciplinasData} />
        
        <div className='py-6'>
          <DisciplinasCard />
        </div>

        <div className="rounded-xl bg-white shadow-sm mb-6 overflow-hidden">
          <div className="p-4 bg-gray-50">
            <h2 className="text-md font-semibold text-slate-800">
              Próximas Disciplinas Sugeridas
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Inteligência Artificial
                    </h3>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Pré-requisitos cumpridos
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-slate-700">INF2045</span>
                    <span>•</span>
                    <span>6 créditos</span>
                    <span>•</span>
                    <span className="capitalize">Obrigatória</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Compiladores
                    </h3>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Pré-requisitos cumpridos
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-slate-700">INF2046</span>
                    <span>•</span>
                    <span>4 créditos</span>
                    <span>•</span>
                    <span className="capitalize">Obrigatória</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Cálculo Avançado
                    </h3>
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                      Pré-requisitos pendentes
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-slate-700">MAT2100</span>
                    <span>•</span>
                    <span>6 créditos</span>
                    <span>•</span>
                    <span className="capitalize">Optativa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='mb-6'>
          <NivelamentosTable />
        </div>

        <div className="rounded-xl bg-yellow-50 p-4 shadow-sm">
          <div className="text-sm font-semibold text-yellow-900 mb-1">Dica de planejamento</div>
          <div className="text-xs text-yellow-700">
            Priorize as disciplinas liberadas que são pré-requisitos para outras. Isso ajudará a desbloquear mais opções nos próximos períodos.
          </div>
        </div>
      </div>
    </div>
  );
}