export const EmptySchedule = ({ selectedDay }: { selectedDay: string }) => (
  <div className="text-center py-8 text-slate-400 bg-white rounded-xl">
    <div className="text-2xl mb-2">📚</div>
    <p className="text-sm">Nenhuma aula agendada para {selectedDay}</p>
  </div>
);