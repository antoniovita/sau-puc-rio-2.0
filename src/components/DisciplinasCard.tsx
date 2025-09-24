import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const DisciplinasCard = () => {
  const disciplinas = [
    {
      id: 1,
      titulo: "Cálculo a uma Variável",
      periodo: "2025.1",
      cargaHoraria: "8h"
    },
    {
      id: 2,
      titulo: "O Cristianismo",
      periodo: "2025.2",
      cargaHoraria: "5h"
    },
    {
      id: 3,
      titulo: "Algoritmos e Estruturas de Dados",
      periodo: "2025.1",
      cargaHoraria: "8h"
    },
    {
      id: 4,
      titulo: "Física Experimental",
      periodo: "2025.1",
      cargaHoraria: "6h"
    },
    {
      id: 5,
      titulo: "Programação Orientada a Objetos",
      periodo: "2025.2",
      cargaHoraria: "6h"
    }
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 sm:max-w-[1300px] overflow-hidden">
      <Swiper
        spaceBetween={16}
        slidesPerView={3.5}
        modules={[]}
        breakpoints={{
          480: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 24,
          },
        }}
        className="disciplinas-swiper"
      >
        {disciplinas.map((disciplina) => (
          <SwiperSlide key={disciplina.id}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 aspect-square flex flex-col justify-between relative hover:shadow-md transition-all duration-300">

              <div className="flex-1 flex flex-col justify-center text-center space-y-2">
                <h3 className="text-gray-900 font-semibold text-sm leading-tight line-clamp-3 sm:text-base">
                  {disciplina.titulo}
                </h3>
                <div className="flex flex-col items-center space-y-1">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {disciplina.periodo}
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-3 right-3">
                <span className="bg-[#DEA02E] text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                  {disciplina.cargaHoraria}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .disciplinas-swiper {
          overflow: visible;
          padding: 4px;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default DisciplinasCard;