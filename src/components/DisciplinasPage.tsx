import React from "react";

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
  const corTipo = (tipo: string) =>
    tipo?.toLowerCase() === "obrigatória" ? "bg-red-500" : "bg-emerald-500";

  return (
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
          px-3
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
              "
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

              {/* Título */}
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

              {/* Código */}
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

              {/* Badge de créditos (sem shadow) */}
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
  );
};

export default DisciplinasPage;
