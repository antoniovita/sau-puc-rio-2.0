import React from 'react';

interface Disciplina {
  codigo: string;
  tipo: string;
  creditos: number;
  turma: string;
  situacao: string;
  grau: string | number;
}

interface DisciplinasTableProps {
  disciplinas: Disciplina[];
}

export const DisciplinasTable: React.FC<DisciplinasTableProps> = ({ disciplinas }) => {
  if (!disciplinas || disciplinas.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Nenhuma disciplina encontrada
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-6 mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-[1300px]">
      {/* Mobile Cards - Default */}
      <div className="space-y-4 md:hidden">
        {disciplinas.map((disciplina, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {disciplina.codigo}
              </h3>
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                {disciplina.tipo}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500 block mb-1">Créditos</span>
                <span className="font-medium text-gray-900">{disciplina.creditos}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Turma</span>
                <span className="font-medium text-gray-900">{disciplina.turma}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Situação</span>
                <span className="font-medium text-gray-900">{disciplina.situacao}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Grau</span>
                <span className="font-semibold text-green-600 text-lg">{disciplina.grau}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table - Hidden on mobile, shown on md+ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
          <thead className="bg-[#DEA02E]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider lg:px-6">
                Disciplina
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider lg:px-6">
                Tipo
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider lg:px-6">
                Créditos
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider lg:px-6">
                Turma
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider lg:px-6">
                Situação
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider lg:px-6">
                Grau
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {disciplinas.map((disciplina, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 lg:px-6">
                  {disciplina.codigo}
                </td>
                <td className="px-4 py-4 whitespace-nowrap lg:px-6">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {disciplina.tipo}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 lg:px-6">
                  {disciplina.creditos}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 lg:px-6">
                  {disciplina.turma}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 lg:px-6">
                  {disciplina.situacao}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-green-600 lg:px-6">
                  {disciplina.grau}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisciplinasTable;