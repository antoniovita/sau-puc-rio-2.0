"use client"
import { Selector, ScheduleList, AttendanceControl } from '@/components';
import { AttendanceItem, ScheduleData } from '@/types/homeType';
import React, { useState, useMemo } from 'react';

export default function Home() {
  const [selectedDay, setSelectedDay] = useState('Segunda-Feira');
  const days = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira'];
  
  const schedule: ScheduleData = {
    'Segunda-Feira': [
      { time: '07-09', subject: 'Cálculo a uma Variável', code: 'MAT4161 - 33C', room: 'L133' },
      { time: '09-11', subject: 'Cálculo a uma Variável', code: 'MAT4161 - 33C', room: 'L442', highlighted: true },
      { time: '11-13', subject: 'Cálculo a uma Variável', code: 'MAT4161 - 33C', room: 'L270' }
    ],
    'Terça-Feira': [
      { time: '08-10', subject: 'Álgebra Linear', code: 'MAT4162 - 44D', room: 'L201' },
      { time: '14-16', subject: 'Física Geral I', code: 'FIS4001 - 22A', room: 'L305' }
    ],
    'Quarta-Feira': [
      { time: '07-09', subject: 'Cálculo a uma Variável', code: 'MAT4161 - 33C', room: 'L133' },
      { time: '10-12', subject: 'Programação I', code: 'INF4101 - 55B', room: 'LAB1' }
    ],
    'Quinta-Feira': [
      { time: '08-10', subject: 'Álgebra Linear', code: 'MAT4162 - 44D', room: 'L201' },
      { time: '14-16', subject: 'Física Geral I', code: 'FIS4001 - 22A', room: 'L305' }
    ],
    'Sexta-Feira': [
      { time: '09-11', subject: 'Programação I', code: 'INF4101 - 55B', room: 'LAB1' }
    ]
  };

  const attendanceData: AttendanceItem[] = [
    { subject: 'MAT4161', totalAbsences: 2, maxAllowed: 8, date: '15/09/2025' },
    { subject: 'MAT4162', totalAbsences: 1, maxAllowed: 8, date: '14/09/2025' },
    { subject: 'FIS4001', totalAbsences: 3, maxAllowed: 8, date: '16/09/2025' },
    { subject: 'INF4101', totalAbsences: 0, maxAllowed: 8, date: '13/09/2025' }
  ];

  const statistics = useMemo(() => {
    const totalDisciplinas = attendanceData.length;
    const totalAulas = schedule[selectedDay]?.length || 0;
    const disciplinasComRisco = attendanceData.filter(d => 
      (d.totalAbsences / d.maxAllowed) >= 0.75
    ).length;
    const presencaMedia = attendanceData.reduce((acc, d) => 
      acc + ((d.maxAllowed - d.totalAbsences) / d.maxAllowed * 100), 0
    ) / totalDisciplinas;

    return { 
      totalDisciplinas, 
      totalAulas, 
      disciplinasComRisco, 
      presencaMedia: Math.round(presencaMedia) 
    };
  }, [selectedDay, attendanceData]);

  const proximasAulas = useMemo(() => {
    const hoje = new Date();
    const diaAtual = hoje.toLocaleDateString('pt-BR', { weekday: 'long' });
    const diasSemana = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'];
    
    let proximoDia = selectedDay;
    for (let i = 0; i < days.length; i++) {
      if (days[i].toLowerCase() > diaAtual) {
        proximoDia = days[i];
        break;
      }
    }
    
    return schedule[proximoDia]?.slice(0, 2) || [];
  }, [selectedDay]);

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
            Horários e disciplinas
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            Visualize seus horários de aula e acompanhe sua frequência
          </p>
          <Selector 
            selections={days}
            selectedThing={selectedDay}
            onSelect={setSelectedDay}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Disciplinas Ativas</div>
            <div className="text-2xl font-bold text-slate-800">{statistics.totalDisciplinas}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Aulas Hoje</div>
            <div className="text-2xl font-bold text-black">{statistics.totalAulas}</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Presença Média</div>
            <div className="text-2xl font-bold text-black">{statistics.presencaMedia}%</div>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Disciplinas em Risco</div>
            <div className='text-2xl font-bold'>
              {statistics.disciplinasComRisco}
            </div>
          </div>
        </div>

        <ScheduleList 
          schedule={schedule}
          selectedDay={selectedDay}
        />

        <div className="rounded-xl bg-white shadow-sm overflow-hidden mt-6 mb-6">
          <div className="p-4 bg-gray-50">
            <h2 className="text-md font-semibold text-slate-800">
              Próximas Aulas
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {proximasAulas.length > 0 ? (
              proximasAulas.map((aula, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-slate-800">
                          {aula.subject}
                        </h3>
                        {aula.highlighted && (
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                            Agora
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="font-medium text-slate-700">{aula.code}</span>
                        <span>•</span>
                        <span>{aula.time}h</span>
                        <span>•</span>
                        <span>Sala {aula.room}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-gray-500">
                Nenhuma aula programada
              </div>
            )}
          </div>
        </div>

        <AttendanceControl attendanceData={attendanceData} />

        <div className="rounded-xl bg-white p-4 shadow-sm mt-6">
          <h2 className="text-md font-semibold text-slate-800 mb-3">Resumo Semanal</h2>
          <div className="grid gap-3 sm:grid-cols-5">
            {days.map((day) => {
              const aulasNoDia = schedule[day]?.length || 0;
              return (
                <div 
                  key={day}
                  className={`rounded-lg p-3  ${
                    day === selectedDay 
                      ? 'bg-blue-50' 
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="text-xs font-semibold text-slate-700 mb-1">
                    {day.split('-')[0]}
                  </div>
                  <div className="text-lg font-bold text-slate-800">
                    {aulasNoDia}
                  </div>
                  <div className="text-xs text-gray-600">
                    {aulasNoDia === 1 ? 'aula' : 'aulas'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {statistics.disciplinasComRisco > 0 ? (
          <div className="rounded-xl bg-red-50 p-4 shadow-sm mt-6">
            <div className="text-sm font-semibold text-red-900 mb-1">⚠ Atenção com a frequência</div>
            <div className="text-xs text-red-700">
              Você possui {statistics.disciplinasComRisco} disciplina(s) próxima(s) do limite de faltas. Mantenha-se atento para não reprovar por frequência.
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-green-50 p-4 shadow-sm mt-6">
            <div className="text-sm font-semibold text-green-900 mb-1">✓ Frequência em dia</div>
            <div className="text-xs text-green-700">
              Parabéns! Sua frequência está adequada em todas as disciplinas. Continue assim!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}