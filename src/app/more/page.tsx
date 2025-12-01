"use client";
import React, { useCallback } from "react";

export default function More() {
  const handleLockEnrollment = useCallback(() => {
    const confirmed = window.confirm(
      "Tem certeza que deseja trancar sua matrícula? Esta ação requer aprovação da coordenação."
    );
    if (confirmed) {
      console.log("Solicitação de trancamento enviada");
      alert("Solicitação de trancamento enviada para análise da coordenação.");
    }
  }, []);

  const handleCancelEnrollment = useCallback(() => {
    const confirmed = window.confirm(
      "ATENÇÃO: Cancelar matrícula é uma ação permanente. Deseja realmente continuar?"
    );
    if (confirmed) {
      console.log("Solicitação de cancelamento enviada");
      alert("Solicitação de cancelamento enviada para análise.");
    }
  }, []);

  const handleDocuments = useCallback(() => {
    console.log("Abrindo documentos pendentes...");
    alert("Redirecionando para área de documentos...");
  }, []);

  const handleFinancial = useCallback(() => {
    console.log("Abrindo área financeira...");
    alert("Redirecionando para área financeira...");
  }, []);

  const handleAcademicHistory = useCallback(() => {
    console.log("Abrindo histórico acadêmico...");
    alert("Redirecionando para histórico acadêmico...");
  }, []);

  const handleCertificates = useCallback(() => {
    console.log("Solicitando declarações...");
    alert("Redirecionando para solicitação de declarações...");
  }, []);

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Mais opções
          </h1>
          <p className="text-gray-600 text-sm">
            Acesse serviços adicionais e funcionalidades importantes
          </p>
        </div>

        {/* Seção: Documentação Acadêmica */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Documentação acadêmica
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={handleDocuments}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-left"
            >
              <div className="text-sm font-semibold text-slate-900">
                Documentos pendentes
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Envie documentos solicitados pela instituição
              </div>
            </button>

            <button
              onClick={handleAcademicHistory}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-left"
            >
              <div className="text-sm font-semibold text-slate-900">
                Histórico acadêmico
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Visualize seu histórico completo e CR
              </div>
            </button>

            <button
              onClick={handleCertificates}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-left"
            >
              <div className="text-sm font-semibold text-slate-900">
                Declarações e atestados
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Solicite declarações de matrícula e frequência
              </div>
            </button>

            <button
              onClick={handleFinancial}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-left"
            >
              <div className="text-sm font-semibold text-slate-900">
                Área financeira
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Boletos, mensalidades e negociações
              </div>
            </button>
          </div>
        </div>

        {/* Seção: Ações de Matrícula */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Ações de matrícula
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl bg-amber-50 p-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-amber-900">
                    Trancar matrícula
                  </div>
                  <div className="text-xs text-amber-700 mt-1">
                    Suspenda temporariamente seus estudos por um ou mais períodos. Requer aprovação da coordenação.
                  </div>
                </div>
                <button
                  onClick={handleLockEnrollment}
                  className="rounded-lg bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-200 transition-colors"
                >
                  Solicitar trancamento
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-red-50 p-4">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-red-900">
                    Cancelar matrícula
                  </div>
                  <div className="text-xs text-red-700 mt-1">
                    Ação permanente que encerra definitivamente seu vínculo com a instituição. Não pode ser desfeita.
                  </div>
                </div>
                <button
                  onClick={handleCancelEnrollment}
                  className="rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-200 transition-colors"
                >
                  Solicitar cancelamento
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Seção: Suporte e Contato */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Suporte e contato
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={() => console.log("Chat ao vivo")}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-yellow-50 transition-all text-center"
            >
              <div className="text-sm font-semibold text-slate-900">Chat ao vivo</div>
              <div className="text-xs text-gray-500 mt-1">Disponível 24/7</div>
            </button>

            <button
              onClick={() => window.location.href = 'mailto:suporte@puc-rio.br'}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all text-center"
            >
              <div className="text-sm font-semibold text-slate-900">E-mail</div>
              <div className="text-xs text-gray-500 mt-1">suporte@puc-rio.br</div>
            </button>

            <button
              onClick={() => window.open('tel:+552133271001', '_self')}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-green-50 transition-all text-center"
            >
              <div className="text-sm font-semibold text-slate-900">Telefone</div>
              <div className="text-xs text-gray-500 mt-1">(21) 3327-1001</div>
            </button>

            <button
              onClick={() => window.open('https://wa.me/552133271001', '_blank')}
              className="rounded-xl bg-white p-4 shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all text-center"
            >
              <div className="text-sm font-semibold text-slate-900">WhatsApp</div>
              <div className="text-xs text-gray-500 mt-1">Atendimento rápido</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}