"use client";
import { Selector } from "@/components";
import React, { useState, useMemo } from "react";

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
    creditos: 4,
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
    creditos: 4,
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
    creditos: 4,
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
    creditos: 6,
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
    creditos: 4,
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
    creditos: 4,
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
    creditos: 4,
  },
];


export default function Grades() {
  const [selectedYear, setSelectedYear] = useState("2025.1");
  const years = ["2025.1", "2024.2", "2024.1"];

  const statistics = useMemo(() => {
    const approved = gradesData.filter(g => g.situacao === "Aprovado").length;
    const pending = gradesData.filter(g => g.situacao === "-").length;
    const totalCredits = gradesData.reduce((sum, g) => sum + g.creditos, 0);
    const approvedCredits = gradesData
      .filter(g => g.situacao === "Aprovado")
      .reduce((sum, g) => sum + g.creditos, 0);
    
    const validGrades = gradesData
      .filter(g => typeof g.media === "number")
      .map(g => g.media as number);
    
    const average = validGrades.length > 0
      ? (validGrades.reduce((sum, g) => sum + g, 0) / validGrades.length).toFixed(2)
      : "-";

    return { approved, pending, totalCredits, approvedCredits, average };
  }, []);

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Consulta de Graus
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            Acompanhe seu desempenho acadêmico por período
          </p>
          <Selector
            selections={years}
            selectedThing={selectedYear}
            onSelect={setSelectedYear}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Média do Período</div>
            <div className="text-2xl font-bold text-slate-800">{statistics.average}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Disciplinas Aprovadas</div>
            <div className="text-2xl font-bold text-black">{statistics.approved}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Disciplinas Pendentes</div>
            <div className="text-2xl font-bold text-black">{statistics.pending}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Créditos Aprovados</div>
            <div className="text-2xl font-bold text-slate-800">
              {statistics.approvedCredits}
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100 text-sm text-gray-700">
              <thead className="bg-yellow-500">
                <tr>
                  <th className="py-3 px-4 text-left text-white font-semibold">Disciplina</th>
                  <th className="py-3 px-4 text-left text-white font-semibold">Nome</th>
                  <th className="py-3 px-4 text-center text-white font-semibold">Turma</th>
                  <th className="py-3 px-4 text-center text-white font-semibold">G1</th>
                  <th className="py-3 px-4 text-center text-white font-semibold">G2</th>
                  <th className="py-3 px-4 text-center text-white font-semibold">PF</th>
                  <th className="py-3 px-4 text-center text-white font-semibold">Média</th>
                  <th className="py-3 px-4 text-center text-white font-semibold">Situação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {gradesData.map((grade, index) => (
                  <tr
                    key={grade.codigo}
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-slate-800">{grade.codigo}</td>
                    <td className="py-3 px-4">{grade.nome}</td>
                    <td className="py-3 px-4 text-center">{grade.turma}</td>
                    <td className="py-3 px-4 text-center font-medium">{grade.g1}</td>
                    <td className="py-3 px-4 text-center font-medium">{grade.g2}</td>
                    <td className="py-3 px-4 text-center font-medium">{grade.provaFinal}</td>
                    <td className="py-3 px-4 text-center font-bold">{grade.media}</td>
                    <td className="py-3 px-4 text-center">
                      {grade.situacao === "Aprovado" && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          Aprovado
                        </span>
                      )}
                      {grade.situacao === "-" && (
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                          Pendente
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="text-md font-semibold text-slate-800 mb-3">Critérios de Avaliação</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-xs font-semibold text-slate-700 mb-1">Critério 2</div>
              <div className="text-xs text-gray-600">Média das duas notas</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-xs font-semibold text-slate-700 mb-1">Critério 3</div>
              <div className="text-xs text-gray-600">Maior nota entre G1 e G2</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-xs font-semibold text-slate-700 mb-1">Critério 6</div>
              <div className="text-xs text-gray-600">Nota única semestral</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-xs font-semibold text-slate-700 mb-1">Critério 7</div>
              <div className="text-xs text-gray-600">Média ponderada específica</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-xs font-semibold text-slate-700 mb-1">Critério 12</div>
              <div className="text-xs text-gray-600">Conceito (A, B, C)</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}