export const YearSelector = ({ years, selectedYear, onYearSelect }: {
  years: string[];
  selectedYear: string;
  onYearSelect: (day: string) => void;
}) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {years.map((year) => (
      <button
        key={year}
        onClick={() => onYearSelect(year)}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
          selectedYear === year
            ? 'bg-[#DEA02E] text-white'
            : 'shadow-sm text-slate-700 hover:bg-zinc-200'
        }`}
      >
        {year.split('-')[0]}
      </button>
    ))}
  </div>
);