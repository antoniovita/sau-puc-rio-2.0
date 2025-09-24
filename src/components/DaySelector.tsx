export const DaySelector = ({ days, selectedDay, onDaySelect }: {
  days: string[];
  selectedDay: string;
  onDaySelect: (day: string) => void;
}) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {days.map((day) => (
      <button
        key={day}
        onClick={() => onDaySelect(day)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
          selectedDay === day
            ? 'bg-[#DEA02E] text-white'
            : 'shadow-sm text-slate-700 hover:bg-zinc-200'
        }`}
      >
        {day.split('-')[0]}
      </button>
    ))}
  </div>
);