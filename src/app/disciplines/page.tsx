"use client"
import { DisciplinasPage, Selector } from '@/components';
import React, { useState } from 'react';

export default function Disciplines() {
  const [selectedYear, setSelectedYear] = useState('Cumpridas');
  const years = ['Cumpridas', 'Liberadas', 'Bloqueadas'];

  const disciplinas = [
    { id: 1,  titulo: "Cálculo a uma Variável",      codigo: "MAT4161", tipo: "obrigatória", creditos: 6 },  
    { id: 2,  titulo: "Cristianismo",               codigo: "HUM2001", tipo: "optativa",    creditos: 3 }, 
    { id: 3,  titulo: "Algoritmos e Estruturas de Dados", codigo: "INF1101", tipo: "obrigatória", creditos: 6 }, 
    { id: 4,  titulo: "Física Experimental",          codigo: "FIS1202", tipo: "obrigatória", creditos: 6 }, 
    { id: 5,  titulo: "Programação Orientada a Objetos", codigo: "INF2103", tipo: "optativa", creditos: 4 }, 
    { id: 6,  titulo: "Banco de Dados",               codigo: "INF2301", tipo: "obrigatória", creditos: 6 }, 
    { id: 7,  titulo: "Sistemas Operacionais",        codigo: "INF2401", tipo: "optativa",    creditos: 3 }, 
    { id: 8,  titulo: "Redes de Computadores",        codigo: "INF2501", tipo: "obrigatória", creditos: 6 }, 
    { id: 9,  titulo: "Engenharia de Software",       codigo: "INF2601", tipo: "obrigatória", creditos: 6 }, 
    { id: 10, titulo: "IA Básica",                    codigo: "INF2701", tipo: "optativa",    creditos: 3 }, 
    { id: 11,  titulo: "Engenharia de Software",       codigo: "INF2601", tipo: "obrigatória", creditos: 6 }, 
    { id: 12, titulo: "IA Básica",                    codigo: "INF2701", tipo: "optativa",    creditos: 3 }, 
    { id: 13,  titulo: "Física Experimental",          codigo: "FIS1202", tipo: "obrigatória", creditos: 6 }, 
    { id: 14,  titulo: "Programação Orientada a Objetos", codigo: "INF2103", tipo: "optativa", creditos: 4 }, 
    { id: 15,  titulo: "Banco de Dados",               codigo: "INF2301", tipo: "obrigatória", creditos: 6 }, 
    { id: 16,  titulo: "Sistemas Operacionais",        codigo: "INF2401", tipo: "optativa",    creditos: 3 }, 
    { id: 17,  titulo: "Redes de Computadores",        codigo: "INF2501", tipo: "obrigatória", creditos: 6 }, 
    { id: 18,  titulo: "Engenharia de Software",       codigo: "INF2601", tipo: "obrigatória", creditos: 6 }, 
    { id: 19, titulo: "IA Básica",                    codigo: "INF2701", tipo: "optativa",    creditos: 3 }, 
    { id: 20,  titulo: "Engenharia de Software",       codigo: "INF2601", tipo: "obrigatória", creditos: 6 }, 
    { id: 21, titulo: "IA Básica",                    codigo: "INF2701", tipo: "optativa",    creditos: 3 }, 
    { id: 22,  titulo: "Física Experimental",          codigo: "FIS1202", tipo: "obrigatória", creditos: 6 }, 
    { id: 23,  titulo: "Programação Orientada a Objetos", codigo: "INF2103", tipo: "optativa", creditos: 4 }, 
    { id: 24,  titulo: "Banco de Dados",               codigo: "INF2301", tipo: "obrigatória", creditos: 6 }, 
    { id: 25,  titulo: "Sistemas Operacionais",        codigo: "INF2401", tipo: "optativa",    creditos: 3 }, 
    { id: 26,  titulo: "Redes de Computadores",        codigo: "INF2501", tipo: "obrigatória", creditos: 6 }, 
    { id: 27,  titulo: "Engenharia de Software",       codigo: "INF2601", tipo: "obrigatória", creditos: 6 }, 
    { id: 28, titulo: "IA Básica",                    codigo: "INF2701", tipo: "optativa",    creditos: 3 }, 
    { id: 29,  titulo: "Engenharia de Software",       codigo: "INF2601", tipo: "obrigatória", creditos: 6 }, 
    { id: 30, titulo: "IA Básica",                    codigo: "INF2701", tipo: "optativa",    creditos: 3 }, 
  ]; 

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:py-4 lg:px-6 mb-24 mt-4">
      <div className="mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Disciplinas
          </h1>

          <Selector
            selections={years}
            selectedThing={selectedYear}
            onSelect={setSelectedYear}
          />
        </div>

        <DisciplinasPage disciplinas={disciplinas} />
      </div>
    </div>
  );
}
