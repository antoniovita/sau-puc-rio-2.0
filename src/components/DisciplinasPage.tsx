import React from 'react';

export const DisciplinasPage = () => { 
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

  const corTipo = (tipo: string) =>
    tipo === "obrigatória" ? "bg-red-500" : "bg-emerald-500";  

  return (
    <div className="w-full max-w-xl mx-auto py-6 sm:max-w-[1300px]"> 
      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
          gap-4 sm:gap-5 lg:gap-6                                       
          overflow-y-auto max-h-[60vh] scrollbar-none                   
          p-1                                                            
        "
      >
        {disciplinas.map((d) => ( 
          <div
            key={d.id}
            className="
              relative
              rounded-[26px] rounded-tr-[15px] bg-gray-200 border border-gray-300/40
              aspect-square w-[145px] p-5 flex flex-col justify-between             
              shadow-sm hover:shadow transition-all                        
            "
          >
           
            <div className="absolute -top-[0.35px] right-[-0.5px] flex items-center gap-2 rounded-full rounded-br-[1px] bg-white px-3 py-1 shadow-sm"> 
              <span className={`h-2.5 w-2.5 rounded-full ${corTipo(d.tipo)}`} /> 
              <span className="text-xs font-medium text-gray-700">{d.tipo}</span> 
            </div>

            
            <div className="mt-2 text-center px-1"> 
              <h3 className="text-gray-900 font-semibold text-lg sm:text-xs leading-snug"> {d.titulo} </h3> 
            </div>

            
            <div className="text-center space-y-2"> 
              <div className="text-gray-800 tracking-wide text-base font-medium ">{d.codigo}</div> 
            </div>

            
            <div className="absolute right-0 bottom-0 h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-sm font-semibold shadow translate-x-3 translate-y-3"> 
              {d.creditos}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisciplinasPage;
