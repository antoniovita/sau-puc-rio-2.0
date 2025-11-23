"use client"
import { DisciplinasPage, Selector } from '@/components';
import React, { useState } from 'react';

export default function Disciplines() {
  const [selectedFilter, setSelectedFilter] = useState('Todas');
  const filters = ['Todas', 'Obrigatórias', 'Optativas', 'Bloqueadas'];

  const disciplinas = [
    { id: 1,  titulo: "Cálculo a uma Variável",      codigo: "MAT4161", tipo: "obrigatória", creditos: 6, status: "cumprida" },  
    { id: 2,  titulo: "Cristianismo",               codigo: "HUM2001", tipo: "optativa",    creditos: 3, status: "cumprida" }, 
    { id: 3,  titulo: "Algoritmos e Estruturas de Dados", codigo: "INF1101", tipo: "obrigatória", creditos: 6, status: "cumprida" }, 
    { id: 4,  titulo: "Física Experimental",          codigo: "FIS1202", tipo: "obrigatória", creditos: 6, status: "liberada" }, 
    { id: 5,  titulo: "Programação Orientada a Objetos", codigo: "INF2103", tipo: "optativa", creditos: 4, status: "liberada" }, 
    { id: 6,  titulo: "Banco de Dados",               codigo: "INF2301", tipo: "obrigatória", creditos: 6, status: "liberada" }, 
    { id: 7,  titulo: "Sistemas Operacionais",        codigo: "INF2401", tipo: "optativa",    creditos: 3, status: "bloqueada" }, 
    { id: 8,  titulo: "Redes de Computadores",        codigo: "INF2501", tipo: "obrigatória", creditos: 6, status: "bloqueada" }, 
    { id: 9,  titulo: "Engenharia de Software",       codigo: "INF2601", tipo: "obrigatória", creditos: 6, status: "bloqueada" }, 
    { id: 10, titulo: "IA Básica",                    codigo: "INF2701", tipo: "optativa",    creditos: 3, status: "bloqueada" }, 
    { id: 11, titulo: "Compiladores",                 codigo: "INF2702", tipo: "obrigatória", creditos: 6, status: "cumprida" }, 
    { id: 12, titulo: "Teoria dos Grafos",            codigo: "INF2703", tipo: "optativa",    creditos: 3, status: "liberada" }, 
    { id: 13, titulo: "Computação Gráfica",           codigo: "FIS1203", tipo: "obrigatória", creditos: 6, status: "cumprida" }, 
    { id: 14, titulo: "Segurança da Informação",      codigo: "INF2104", tipo: "optativa", creditos: 4, status: "liberada" }, 
    { id: 15, titulo: "Mineração de Dados",           codigo: "INF2302", tipo: "obrigatória", creditos: 6, status: "bloqueada" }, 
    { id: 16, titulo: "Arquitetura de Computadores",  codigo: "INF2402", tipo: "optativa",    creditos: 3, status: "cumprida" }, 
    { id: 17, titulo: "Programação Web",              codigo: "INF2502", tipo: "obrigatória", creditos: 6, status: "liberada" }, 
    { id: 18, titulo: "Desenvolvimento Mobile",       codigo: "INF2602", tipo: "obrigatória", creditos: 6, status: "bloqueada" }, 
    { id: 19, titulo: "Machine Learning",             codigo: "INF2704", tipo: "optativa",    creditos: 3, status: "liberada" }, 
    { id: 20, titulo: "Lógica Matemática",            codigo: "INF2603", tipo: "obrigatória", creditos: 6, status: "cumprida" }, 
  ]; 

  // Filtrar disciplinas baseado no filtro selecionado
  const disciplinasFiltradas = disciplinas.filter((disciplina) => {
    if (selectedFilter === 'Todas') return true;
    if (selectedFilter === 'Obrigatórias') return disciplina.tipo === 'obrigatória';
    if (selectedFilter === 'Optativas') return disciplina.tipo === 'optativa';
    if (selectedFilter === 'Bloqueadas') return disciplina.status === 'bloqueada';
    return true;
  });

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:py-4 lg:px-6 mb-24 mt-4">
      <div className="mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Disciplinas
          </h1>

          <Selector
            selections={filters}
            selectedThing={selectedFilter}
            onSelect={setSelectedFilter}
          />
        </div>
        
        <DisciplinasPage disciplinas={disciplinasFiltradas} />
      </div>
    </div>
  );
}