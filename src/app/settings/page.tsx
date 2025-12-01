"use client";

import React, { useState, useCallback, useMemo } from "react";

interface SettingsState {
  fullName: string;
  emailInstitutional: string;
  phone: string;
  language: string;
  timezone: string;
  notifyEmail: boolean;
  notifyPush: boolean;
  reminderWhatsapp: boolean;
  darkMode: boolean;
  fontSize: "Compacto" | "Normal" | "Ampliado";
  contrastBoost: boolean;
}

type BooleanSettingField = {
  [K in keyof SettingsState]: SettingsState[K] extends boolean ? K : never;
}[keyof SettingsState];

interface ToggleOption {
  field: BooleanSettingField;
  label: string;
  description: string;
}

interface InputFieldConfig {
  field: keyof SettingsState;
  label: string;
  type?: "text" | "select";
  options?: string[];
  disabled?: boolean;
  hint?: string;
}

const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <label className="relative inline-flex h-6 w-11 items-center cursor-pointer">
    <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
    <span className={`inline-flex h-6 w-11 items-center rounded-full transition-colors ${checked ? "bg-yellow-500" : "bg-gray-200"}`}>
      <span className={`h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${checked ? "translate-x-5" : "translate-x-1"}`} />
    </span>
  </label>
);

const ToggleRow = ({ label, description, checked, onChange }: { 
  label: string; 
  description: string; 
  checked: boolean; 
  onChange: () => void;
}) => (
  <div className="flex items-start justify-between rounded-xl bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
    <div>
      <div className="text-sm font-semibold text-slate-800">{label}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>
    <Toggle checked={checked} onChange={onChange} />
  </div>
);

const InputField = ({ 
  label, 
  value, 
  onChange, 
  disabled, 
  hint, 
  type = "text", 
  options 
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  hint?: string;
  type?: "text" | "select";
  options?: string[];
}) => (
  <label className="text-sm font-medium text-slate-800">
    {label}
    {type === "select" && options ? (
      <div className="relative mt-1">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full appearance-none rounded-xl px-4 py-2.5 pr-10 text-sm focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all ${
            disabled ? "bg-gray-100 text-slate-500 cursor-not-allowed" : "bg-gray-50 text-slate-700 cursor-pointer hover:bg-gray-100"
          }`}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    ) : (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`mt-1 w-full rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-yellow-500/20 focus:outline-none transition-all ${
          disabled ? "bg-gray-100 text-slate-500 cursor-not-allowed" : "bg-gray-50 text-slate-700 hover:bg-gray-100"
        }`}
      />
    )}
    {hint && <span className="text-xs text-gray-400 block mt-1">{hint}</span>}
  </label>
);

export default function Settings() {
  const [settings, setSettings] = useState<SettingsState>({
    fullName: "João Silva",
    emailInstitutional: "joao.silva@aluno.puc-rio.br",
    phone: "(21) 99888-0000",
    language: "Português (Brasil)",
    timezone: "GMT-3 (Brasília)",
    notifyEmail: true,
    notifyPush: true,
    reminderWhatsapp: false,
    darkMode: false,
    fontSize: "Normal",
    contrastBoost: false,
  });

  const handleFieldChange = useCallback(<K extends keyof SettingsState>(
    field: K,
    value: SettingsState[K]
  ) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  }, []);

  const toggleOption = useCallback((field: BooleanSettingField) => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field] }));
  }, []);

  const handleSave = useCallback(() => {
    console.log("Configurações salvas:", settings);
    alert("Preferências salvas com sucesso!");
  }, [settings]);

  const identificationFields: InputFieldConfig[] = useMemo(() => [
    { field: "fullName", label: "Nome completo" },
    { field: "phone", label: "Telefone para contato" },
    { 
      field: "emailInstitutional", 
      label: "E-mail institucional", 
      disabled: true, 
      hint: "Apenas a secretaria pode alterar esse endereço." 
    },
    { 
      field: "language", 
      label: "Idioma preferido", 
      type: "select", 
      options: ["Português (Brasil)", "Inglês", "Espanhol"] 
    },
    { 
      field: "timezone", 
      label: "Fuso horário acadêmico", 
      type: "select", 
      options: ["GMT-3 (Brasília)", "GMT-4 (Manaus)", "GMT-2 (Fernando de Noronha)"] 
    },
  ], []);

  const notificationToggles: ToggleOption[] = useMemo(() => [
    {
      field: "notifyEmail",
      label: "Receber avisos por e-mail",
      description: "Envio diário com resumo de atividades pendentes e comunicados."
    },
    {
      field: "notifyPush",
      label: "Notificações push no aplicativo",
      description: "Alertas em tempo real sobre início de aulas ao vivo e liberações de materiais."
    },
    {
      field: "reminderWhatsapp",
      label: "Lembretes via WhatsApp",
      description: "Mensagens enviadas duas horas antes de provas e entregas críticas."
    },
  ], []);

  const accessibilityToggles: ToggleOption[] = useMemo(() => [
    {
      field: "darkMode",
      label: "Modo escuro automático",
      description: "Ativa tema com baixo brilho após 20h para evitar fadiga ocular."
    },
    {
      field: "contrastBoost",
      label: "Alto contraste",
      description: "Adiciona contornos e aumenta o contraste dos componentes."
    },
  ], []);

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto space-y-6">

        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Configurações
          </h1>
          <p className="text-gray-600 text-sm">
            Gerencie suas preferências e informações pessoais
          </p>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-md font-semibold text-slate-800">Identificação do aluno</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {identificationFields.map(({ field, label, type, options, disabled, hint }) => (
              <InputField
                key={field}
                label={label}
                value={String(settings[field])}
                onChange={(value) => handleFieldChange(field, value as any)}
                type={type}
                options={options}
                disabled={disabled}
                hint={hint}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-md font-semibold text-slate-800">Notificações e lembretes</h2>
            <p className="text-xs text-gray-500 mt-1">
              Controle como quer ser avisado sobre atividades, fóruns e prazos.
            </p>
          </div>
          <div className="space-y-3">
            {notificationToggles.map(({ field, label, description }) => (
              <ToggleRow
                key={field}
                label={label}
                description={description}
                checked={settings[field]}
                onChange={() => toggleOption(field)}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-md font-semibold text-slate-800">Interface e acessibilidade</h2>
            <p className="text-xs text-gray-500 mt-1">
              Ajuste leitura, contrastes e modo de exibição para longos períodos de estudo.
            </p>
          </div>
          <div className="mb-3">
            <InputField
              label="Tamanho da fonte"
              value={settings.fontSize}
              onChange={(value) => handleFieldChange("fontSize", value as SettingsState["fontSize"])}
              type="select"
              options={["Compacto", "Normal", "Ampliado"]}
            />
          </div>
          <div className="space-y-3">
            {accessibilityToggles.map(({ field, label, description }) => (
              <ToggleRow
                key={field}
                label={label}
                description={description}
                checked={settings[field]}
                onChange={() => toggleOption(field)}
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-yellow-50 p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-slate-800">Revisar e salvar</div>
              <div className="text-xs text-gray-500 mt-1">
                Mudanças são aplicadas apenas nesta conta e podem ser revertidas a qualquer momento.
              </div>
            </div>
            <button 
              onClick={handleSave}
              className="rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-yellow-600 transition-colors"
            >
              Salvar preferências
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}