//types
import { AttendanceItem } from "@/types/homeType";

//components
import { AttendanceRow, ProgressBar } from "./index";

export const AttendanceControl = ({ attendanceData }: { attendanceData: AttendanceItem[] }) => (
  <div className="bg-white rounded-xl p-4">
    <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
      Controle de Faltas
    </h2>
    
    {/* Table Header */}
    <div className="hidden sm:grid sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-lg font-semibold text-slate-600 mb-3 text-sm">
      <div>Disciplina</div>
      <div>Faltas</div>
      <div>Máximo</div>
      <div>Última falta</div>
    </div>
    
    {/* Table Rows */}
    <div className="space-y-2">
      {attendanceData.map((item, index) => (
        <AttendanceRow key={index} item={item} />
      ))}
    </div>
    
    {/* Progress Indicators */}
    <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
      {attendanceData.map((item, index) => (
        <ProgressBar key={index} item={item} />
      ))}
    </div>
  </div>
);