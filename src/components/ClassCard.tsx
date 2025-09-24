//types
import { ClassSchedule } from "@/types/homeType";

export const ClassCard = ({ classItem }: { classItem: ClassSchedule }) => (
  <div className="flex items-center p-3 rounded-xl transition-all duration-200 hover:-lg hover:-translate-y-0.5 bg-white">

    <div className="text-base font-bold text-slate-800 w-12 sm:w-16 flex-shrink-0">
      <div className="text-center">
        <div className="text-sm">{classItem.time.split('-')[0]}</div>
        <div className="text-xs text-slate-400">|</div>
        <div className="text-sm">{classItem.time.split('-')[1]}</div>
      </div>
    </div>


    <div className="flex-1 ml-3">
      <h3 className="text-base font-semibold text-slate-800 mb-0.5 leading-tight">
        {classItem.subject}
      </h3>
      <p className="text-xs text-slate-500 font-medium">{classItem.code}</p>
    </div>


    <div className="text-base font-bold ml-3 px-2 py-1 rounded-lg text-center min-w-12">
      {classItem.room}
    </div>
  </div>
);