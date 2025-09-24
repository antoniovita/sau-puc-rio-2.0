//types
import { AttendanceItem } from "@/types/homeType";

export const ProgressBar = ({ item }: { item: AttendanceItem }) => {
  const percentage = (item.totalAbsences / item.maxAllowed) * 100;
  
  return (
    <div className="bg-slate-50 p-3 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-semibold text-slate-700">{item.subject}</span>
        <span className="text-xs text-slate-400">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all duration-300 ${
            percentage > 75
              ? 'bg-gradient-to-r from-red-400 to-red-500'
              : percentage > 50
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
              : 'bg-gradient-to-r from-green-400 to-green-500'
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>
      <div className="text-xs text-slate-500 mt-1">
        {item.totalAbsences} de {item.maxAllowed} faltas
      </div>
    </div>
  );
};