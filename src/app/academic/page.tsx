"use client"
import { DisciplinasCard, DisciplinasTable, NivelamentosTable, Selector, } from '@/components';
import React, { useState } from 'react';


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

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Vida acadêmica
          </h1>

        <Selector 
          selections={years} 
          selectedThing={selectedYear} 
          onSelect={setSelectedYear} 
        />
        </div>

      <DisciplinasTable disciplinas={disciplinasData} />

      <div className='py-6'>
       <DisciplinasCard />
      </div>

      <div className=''>
        <NivelamentosTable />
      </div>

      </div>
    </div>
  );
}