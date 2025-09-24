//types
import { AttendanceItem } from "@/types/homeType";

export const AttendanceRow = ({ item }: { item: AttendanceItem }) => (
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-lg duration-3000 hover:bg-slate-100 transition-colors text-sm">
    <div className="font-semibold text-slate-800">
      <span className="sm:hidden text-slate-500 font-normal">Disciplina: </span>
      {item.subject}
    </div>
    <div className="text-slate-700">
      <span className="sm:hidden text-slate-500 font-normal">Faltas: </span>
      <span className={`font-semibold px-2 py-0.5 rounded-full text-xs ${
        item.totalAbsences / item.maxAllowed > 0.75 
          ? 'bg-red-100 text-red-700' 
          : item.totalAbsences / item.maxAllowed > 0.5 
          ? 'bg-yellow-100 text-yellow-700'
          : 'bg-green-100 text-green-700'
      }`}>
        {item.totalAbsences}/{item.maxAllowed}
      </span>
    </div>
    <div className="text-slate-600">
      <span className="sm:hidden text-slate-500 font-normal">Máximo: </span>
      {item.maxAllowed}
    </div>
    <div className="text-slate-500 text-xs">
      <span className="sm:hidden font-normal">Data: </span>
      {item.date}
    </div>
  </div>
);
