"use client"
import { Selector, ScheduleList, AttendanceControl } from '@/components';
import { AttendanceItem, ScheduleData } from '@/types/homeType';
import React, { useState } from 'react';


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

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Horários e disciplinas
          </h1>

          <Selector 
            selections={days}
            selectedThing={selectedDay}
            onSelect={setSelectedDay}
          />
        </div>

        <ScheduleList 
          schedule={schedule}
          selectedDay={selectedDay}
        />

        <AttendanceControl attendanceData={attendanceData} />
      </div>
    </div>
  );
}