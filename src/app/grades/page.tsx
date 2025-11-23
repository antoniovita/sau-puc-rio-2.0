"use client";

import React, { useState } from "react";
import { YearSelector } from "@/components"; 

const gradesData = [
  {
    codigo: "INF1014",
    nome: "SEMINÁRIOS",
    turma: "3WB",
    g1: "-",
    g2: "-",
    provaFinal: "-",
    media: "-",
    situacao: "-",
    criterio: 12,
  },
  {
    codigo: "INF1020",
    nome: "SOFTWARE",
    turma: "3WB",
    g1: 7.4,
    g2: "-",
    provaFinal: "-",
    media: 7.4,
    situacao: "Aprovado",
    criterio: 7,
  },
  {
    codigo: "INF1000",
    nome: "ANÁLISE",
    turma: "3WA",
    g1: 9.7,
    g2: "-",
    provaFinal: "-",
    media: 9.7,
    situacao: "Aprovado",
    criterio: 6,
  },
  {
    codigo: "INF1039",
    nome: "PROJETOS: APLICAÇÕES INTERATIVAS",
    turma: "3WA",
    g1: "-",
    g2: "-",
    provaFinal: "-",
    media: "-",
    situacao: "-",
    criterio: 12,
  },
  {
    codigo: "INF1700",
    nome: "COMPUTAÇÃO",
    turma: "3WA",
    g1: 9.9,
    g2: "-",
    provaFinal: "-",
    media: 9.9,
    situacao: "Aprovado",
    criterio: 2,
  },
  {
    codigo: "JUR1800",
    nome: "DIREITO",
    turma: "2HA",
    g1: 9.5,
    g2: "-",
    provaFinal: "-",
    media: 9.5,
    situacao: "Aprovado",
    criterio: 3,
  },
  {
    codigo: "LET1000",
    nome: "LÍNGUA P I",
    turma: "1DB",
    g1: 8.0,
    g2: "-",
    provaFinal: "-",
    media: 8.0,
    situacao: "Aprovado",
    criterio: 3,
  },
];

export default function Grades() {
  const [selectedYear, setSelectedYear] = useState("2025.1");
  const years = ["2025.1", "2024.2", "2024.1"];

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Consulta de Graus
          </h1>

          <p className="text-gray-600 text-sm mb-3">
            Mantenha seu e-mail de contato com o SAU atualizado, pois os avisos
            transmitidos pelo sistema, sempre que um grau for atualizado, serão
            enviados para ele.
          </p>

          <YearSelector
            years={years}
            selectedYear={selectedYear}
            onYearSelect={setSelectedYear}
          />
        </div>

        {/* Tabela de notas */}
        <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-xl">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-yellow-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Disciplina</th>
                <th className="py-3 px-4 text-left">Nome</th>
                <th className="py-3 px-4 text-center">Turma</th>
                <th className="py-3 px-4 text-center">G1</th>
                <th className="py-3 px-4 text-center">G2</th>
                <th className="py-3 px-4 text-center">Prova Final</th>
                <th className="py-3 px-4 text-center">Média</th>
                <th className="py-3 px-4 text-center">Situação</th>
                <th className="py-3 px-4 text-center">Critério</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {gradesData.map((grade) => (
                <tr
                  key={grade.codigo}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-semibold">{grade.codigo}</td>
                  <td className="py-3 px-4">{grade.nome}</td>
                  <td className="py-3 px-4 text-center">{grade.turma}</td>
                  <td className="py-3 px-4 text-center">{grade.g1}</td>
                  <td className="py-3 px-4 text-center">{grade.g2}</td>
                  <td className="py-3 px-4 text-center">{grade.provaFinal}</td>
                  <td className="py-3 px-4 text-center">{grade.media}</td>
                  <td className="py-3 px-4 text-center">{grade.situacao}</td>
                  <td className="py-3 px-4 text-center">{grade.criterio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Observação */}
        <p className="text-xs text-gray-500 mt-4">
          * Valores fictícios apenas para demonstração visual.
        </p>
      </div>
    </div>
  );
}
