"use client";

import { Selector } from "@/components";
import React, { useState, useMemo, useEffect } from "react";

type TipoDisciplina = "obrigatória" | "optativa";
type StatusDisciplina = "cumprida" | "liberada" | "bloqueada";

type ApiSubject = {
  id: string;
  name: string;
  creditos: number;
  nivelamento: boolean;
  codigo?: string;
  tipo?: TipoDisciplina;
  status?: StatusDisciplina;
};

type Disciplina = {
  id: string | number;
  titulo: string;
  codigo: string;
  tipo: TipoDisciplina;
  creditos: number;
  status: StatusDisciplina;
};

export default function Disciplines() {
  const [selectedFilter, setSelectedFilter] = useState("Todas");
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filters = ["Todas", "Obrigatórias", "Optativas", "Bloqueadas"];

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await fetch("/api/subject");
        if (!res.ok) {
          throw new Error("Erro ao buscar disciplinas");
        }

        const data: ApiSubject[] = await res.json();

        const mapped: Disciplina[] = data.map((subject) => ({
          id: subject.id,
          titulo: subject.name,
          creditos: subject.creditos,
          codigo: subject.codigo ?? "—",
          tipo: subject.tipo ?? "obrigatória",
          status: subject.status ?? "liberada",
        }));

        setDisciplinas(mapped);
      } catch (err: any) {
        console.error(err);
        setError(err.message ?? "Erro inesperado ao buscar disciplinas");
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const disciplinasFiltradas = useMemo(() => {
    return disciplinas.filter((disciplina) => {
      if (selectedFilter === "Todas") return true;
      if (selectedFilter === "Obrigatórias")
        return disciplina.tipo === "obrigatória";
      if (selectedFilter === "Optativas")
        return disciplina.tipo === "optativa";
      if (selectedFilter === "Bloqueadas")
        return disciplina.status === "bloqueada";
      return true;
    });
  }, [selectedFilter, disciplinas]);

  const statistics = useMemo(() => {
    const cumpridas = disciplinas.filter((d) => d.status === "cumprida").length;
    const liberadas = disciplinas.filter((d) => d.status === "liberada").length;
    const bloqueadas = disciplinas.filter(
      (d) => d.status === "bloqueada"
    ).length;
    const creditosCumpridos = disciplinas
      .filter((d) => d.status === "cumprida")
      .reduce((sum, d) => sum + d.creditos, 0);
    const creditosTotal = disciplinas.reduce(
      (sum, d) => sum + d.creditos,
      0
    );

    return { cumpridas, liberadas, bloqueadas, creditosCumpridos, creditosTotal };
  }, [disciplinas]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "cumprida":
        return "bg-green-100 text-green-700";
      case "liberada":
        return "bg-blue-100 text-blue-700";
      case "bloqueada":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "cumprida":
        return "Cumprida";
      case "liberada":
        return "Liberada";
      case "bloqueada":
        return "Bloqueada";
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-gray-500">
        Carregando disciplinas...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Disciplinas
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            Visualize todas as disciplinas do seu curso e seu progresso
          </p>
          <Selector
            selections={filters}
            selectedThing={selectedFilter}
            onSelect={setSelectedFilter}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">
              Total de Disciplinas
            </div>
            <div className="text-2xl font-bold text-slate-800">
              {disciplinas.length}
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">
              Disciplinas Cumpridas
            </div>
            <div className="text-2xl font-bold text-black">
              {statistics.cumpridas}
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">
              Disciplinas Liberadas
            </div>
            <div className="text-2xl font-bold text-black">
              {statistics.liberadas}
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">
              Créditos Cumpridos
            </div>
            <div className="text-2xl font-bold text-black">
              {statistics.creditosCumpridos}/{statistics.creditosTotal}
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-semibold text-slate-800">
              Progresso do Curso
            </div>
            <div className="text-sm font-medium text-gray-600">
              {statistics.creditosTotal > 0
                ? Math.round(
                    (statistics.creditosCumpridos /
                      statistics.creditosTotal) *
                      100
                  )
                : 0}
              %
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
              style={{
                width:
                  statistics.creditosTotal > 0
                    ? `${
                        (statistics.creditosCumpridos /
                          statistics.creditosTotal) *
                        100
                      }%`
                    : "0%",
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>{statistics.creditosCumpridos} créditos concluídos</span>
            <span>
              {statistics.creditosTotal - statistics.creditosCumpridos} créditos
              restantes
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50">
            <h2 className="text-md font-semibold text-slate-800">
              {selectedFilter === "Todas"
                ? "Todas as Disciplinas"
                : `Disciplinas ${selectedFilter}`}
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({disciplinasFiltradas.length})
              </span>
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {disciplinasFiltradas.map((disciplina, index) => (
              <div
                key={disciplina.id}
                className={`p-4 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-slate-800">
                        {disciplina.titulo}
                      </h3>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(
                          disciplina.status
                        )}`}
                      >
                        {getStatusLabel(disciplina.status)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="font-medium text-slate-700">
                        {disciplina.codigo}
                      </span>
                      <span>•</span>
                      <span>{disciplina.creditos} créditos</span>
                      <span>•</span>
                      <span className="capitalize">{disciplina.tipo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {disciplinasFiltradas.length === 0 && (
              <div className="p-4 text-xs text-gray-500">
                Nenhuma disciplina encontrada para esse filtro.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <h2 className="text-md font-semibold text-slate-800 mb-3">
            Legenda de Status
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-green-50 p-3">
              <div className="text-xs font-semibold text-green-700 mb-1">
                Cumprida
              </div>
              <div className="text-xs text-green-600">
                Disciplina já concluída com aprovação
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-xs font-semibold text-blue-700 mb-1">
                Liberada
              </div>
              <div className="text-xs text-blue-600">
                Disponível para matrícula no próximo período
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="text-xs font-semibold text-gray-700 mb-1">
                Bloqueada
              </div>
              <div className="text-xs text-gray-600">
                Requer pré-requisitos ainda não cumpridos
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-yellow-50 p-4 shadow-sm">
          <div className="text-sm font-semibold text-yellow-900 mb-1">
            Dica de planejamento
          </div>
          <div className="text-xs text-yellow-700">
            Priorize as disciplinas liberadas que são pré-requisitos para
            outras. Isso ajudará a desbloquear mais opções nos próximos
            períodos.
          </div>
        </div>
      </div>
    </div>
  );
}
