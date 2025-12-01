import Link from "next/link";

export const NivelamentosTable = () => {
  const nivelamentos = [
    { 
      id: 1, 
      titulo: "Matemática Básica", 
      codigo: "MAT0001", 
      creditos: 4, 
      status: "pendente",
      prazo: "2025.2"
    },
    { 
      id: 2, 
      titulo: "Português Instrumental", 
      codigo: "LET0001", 
      creditos: 3, 
      status: "cumprido",
      prazo: "2025.1"
    },
    { 
      id: 3, 
      titulo: "Lógica de Programação", 
      codigo: "INF0001", 
      creditos: 4, 
      status: "pendente",
      prazo: "2025.2"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'cumprido': return 'bg-green-100 text-green-700';
      case 'pendente': return 'bg-yellow-100 text-yellow-700';
      case 'atrasado': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'cumprido': return 'Cumprido';
      case 'pendente': return 'Pendente';
      case 'atrasado': return 'Atrasado';
      default: return status;
    }
  };

  return ( 
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4 px-6">
        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
          Nivelamentos
        </h2>
        <Link 
          href={"/nivelamentos"} 
          className="px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200 sm:px-6 sm:py-2.5"
        >
          Ver mais
        </Link>
      </div>

      <div className="rounded-xl bg-white shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {nivelamentos.map((niv, index) => (
            <div
              key={niv.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-slate-800">
                      {niv.titulo}
                    </h3>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(niv.status)}`}>
                      {getStatusLabel(niv.status)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-slate-700">{niv.codigo}</span>
                    <span>•</span>
                    <span>{niv.creditos} créditos</span>
                    <span>•</span>
                    <span>Prazo: {niv.prazo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default NivelamentosTable;