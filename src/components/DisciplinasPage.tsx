"use client"
import React, { useState } from "react";
import { X } from "lucide-react";

const modalStyles = `
  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .modal-overlay {
    animation: fadeIn 0.2s ease-out;
  }
  
  .modal-content {
    animation: slideUp 0.3s ease-out;
  }
`;

export type Disciplina = {
  id: number;
  titulo: string;
  codigo: string;
  tipo: string;
  creditos: number;
};

export type DisciplinasPageProps = {
  disciplinas: Disciplina[];
};

export const DisciplinasPage = ({ disciplinas }: DisciplinasPageProps) => {
  const [selectedDisciplina, setSelectedDisciplina] = useState<Disciplina | null>(null);

  const corTipo = (tipo: string) =>
    tipo?.toLowerCase() === "obrigatória" ? "bg-red-500" : "bg-emerald-500";

  const closeModal = () => setSelectedDisciplina(null);

  return (
    <>
      <style>{modalStyles}</style>
      <section
        aria-labelledby="disciplinas-titulo"
        className="w-full py-3 sm:py-6 px-3 sm:px-4"
      >
        <h2 id="disciplinas-titulo" className="sr-only">
          Disciplinas
        </h2>
        <ul
          className="
            grid
            grid-cols-2
            xs:grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-5 sm:gap-4 md:gap-5 lg:gap-6
            md:overflow-y-auto md:max-h-3xl
            [scrollbar-width:none]
            sm:px-3
          "
          role="list"
        >
          {disciplinas.map((d) => (
            <li key={d.id} role="listitem">
              <article
                aria-label={`${d.titulo} (${d.codigo})`}
                className="
                  relative
                  rounded-2xl md:rounded-[26px] md:rounded-tr-[15px]
                  bg-gray-200/50
                  w-full h-full
                  p-3 sm:p-4 md:p-5
                  flex flex-col justify-between
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-400/40
                  cursor-pointer
                  hover:bg-gray-300/50
                  transition-colors
                "
                onClick={() => setSelectedDisciplina(d)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedDisciplina(d);
                  }
                }}
              >
                <div
                  className="
                    absolute
                    -top-1 -right-1
                    flex items-center gap-1.5 sm:gap-2
                    rounded-full rounded-br-[2px]
                    bg-gray-50 backdrop-blur
                    px-2 sm:px-3 py-1
                  "
                  aria-label={`Tipo: ${d.tipo}`}
                >
                  <span
                    className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${corTipo(
                      d.tipo
                    )}`}
                  />
                  <span className="text-[10px] sm:text-xs font-medium text-gray-700">
                    {d.tipo}
                  </span>
                </div>

                <div className="mt-6 sm:mt-4 text-center px-1">
                  <h3
                    className="
                      text-gray-900 font-semibold
                      text-sm sm:text-base lg:text-lg
                      leading-snug
                      line-clamp-2
                      break-words
                    "
                    title={d.titulo}
                  >
                    {d.titulo}
                  </h3>
                </div>

                <div className="text-center mt-2">
                  <div
                    className="
                      text-gray-800 tracking-wide
                      text-sm sm:text-base font-medium
                      truncate
                    "
                    title={d.codigo}
                  >
                    {d.codigo}
                  </div>
                </div>

                <div
                  className="
                    absolute right-0 bottom-0
                    h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10
                    rounded-full bg-gray-500 text-white
                    flex items-center justify-center
                    text-xs sm:text-sm font-semibold
                    translate-x-2 translate-y-2 sm:translate-x-2.5 sm:translate-y-2.5 md:translate-x-3 md:translate-y-3
                  "
                  aria-label={`${d.creditos} créditos`}
                >
                  {d.creditos}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {selectedDisciplina && (
        <div
          className="modal-overlay fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-4 z-[9999]"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content bg-white rounded-t-3xl sm:rounded-2xl max-w-lg w-full p-6 pb-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Indicador de arrastar para baixo (mobile) */}
            <div className="flex justify-center sm:hidden mb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`h-3 w-3 rounded-full ${corTipo(
                    selectedDisciplina.tipo
                  )}`}
                />
                <span className="text-sm font-medium text-gray-600 capitalize">
                  {selectedDisciplina.tipo}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedDisciplina.titulo}
              </h2>

              <p className="text-lg font-medium text-gray-700">
                {selectedDisciplina.codigo}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600 font-medium">Créditos</span>
                <span className="text-2xl font-bold text-gray-900">
                  {selectedDisciplina.creditos}
                </span>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Informações Adicionais
                </h3>
                <p className="text-gray-600 text-sm">
                  Esta é uma disciplina {selectedDisciplina.tipo.toLowerCase()} do curso,
                  com carga horária de {selectedDisciplina.creditos} créditos.
                </p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors active:scale-95"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DisciplinasPage;