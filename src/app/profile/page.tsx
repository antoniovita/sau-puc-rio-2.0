"use client"
import { DisciplinasPage, YearSelector, } from '@/components';
import React, { useState } from 'react';




export default function Academic() {
    const [selectedYear, setSelectedYear] = useState('Cumpridas');
    const years = ['Cumpridas', 'Liberadas', 'Bloqueadas'];

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">
            Disciplinas
          </h1>

        <YearSelector 
          years={years} 
          selectedYear={selectedYear} 
          onYearSelect={setSelectedYear} 
        />
        </div>


      <div className=''>
       <DisciplinasPage />
      </div>

      </div>
    </div>
  );
}