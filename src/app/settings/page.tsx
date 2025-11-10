"use client";

import React, { useState } from "react";
import { YearSelector } from "@/components"; 

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [theme, setTheme] = useState("light");
  const [selectedYear, setSelectedYear] = useState("2025.1");
  const years = ["2025.1", "2024.2", "2024.1"];

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Configurações
          </h1>
          <p className="text-gray-600 text-sm">
            Personalize suas preferências e comportamento do sistema.
          </p>
        </div>

        {/* Seção 1: Preferências gerais */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Preferências gerais
          </h2>

          <div className="flex flex-col gap-4">
            {/* Tema */}
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">
                Tema da interface
              </label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 text-sm"
              >
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
                <option value="system">Automático</option>
              </select>
            </div>

            {/* Notificações */}
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">
                Notificações por e-mail
              </label>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="w-5 h-5 text-yellow-600 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Seção 2: Período acadêmico */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Período padrão
          </h2>

          <p className="text-gray-600 text-sm mb-3">
            Escolha o período acadêmico padrão exibido nas telas de notas e
            disciplinas.
          </p>

          <YearSelector
            years={years}
            selectedYear={selectedYear}
            onYearSelect={setSelectedYear}
          />
        </div>

        {/* Seção 3: Conta */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Conta e segurança
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                E-mail cadastrado
              </label>
              <input
                type="email"
                value="usuario@puc-rio.br"
                readOnly
                className="w-full border border-gray-300 rounded-lg p-2 bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
              onClick={() => alert("Função de alteração de senha em breve.")}
            >
              Alterar senha
            </button>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-right mt-6">
          <button
            onClick={() => alert("Configurações salvas com sucesso!")}
            className="bg-slate-800 text-white font-medium px-6 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  );
}
