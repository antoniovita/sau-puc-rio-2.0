"use client";

import React, { useState } from "react";
import { FaBell } from "react-icons/fa";


interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  read: boolean;
  professor?: string;
  course?: string;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Amanhã não haverá aula",
      message:
        "O professor de INF1761 (Computação Gráfica) avisou que não haverá aula amanhã devido a um evento institucional.",
      date: "10/11/2025",
      read: false,
      professor: "Prof. André Fernandes",
      course: "INF1761",
    },
    {
      id: 2,
      title: "Prova marcada",
      message:
        "A prova de INF4002 (Arquitetura de Computadores) será realizada no dia 31/01 às 9h, sala L133.",
      date: "08/11/2025",
      read: true,
      professor: "Profª. Ana Lúcia",
      course: "INF4002",
    },
    {
      id: 3,
      title: "Entrega de trabalho",
      message:
        "Lembrete: o projeto final de INF1018 (Software Básico) deve ser entregue até o dia 25/11.",
      date: "06/11/2025",
      read: false,
      professor: "Prof. Rafael Melo",
      course: "INF1018",
    },
  ]);

  const toggleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  return (
    <div className="min-h-screen sm:px-4 sm:py-4 lg:px-6 mb-24 mt-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
              <FaBell  className="text-yellow-600" />
              Notificações
            </h1>
            <p className="text-gray-600 text-sm">
              Veja os comunicados recentes enviados pelos professores.
            </p>
          </div>

          {/* Botão limpar */}
          <button
            onClick={() =>
              setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
            }
            className="text-sm font-medium text-yellow-600 hover:underline"
          >
            Marcar todas como lidas
          </button>
        </div>

        {/* Lista de notificações */}
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-sm text-center py-8">
              Nenhuma notificação disponível.
            </p>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className={`border rounded-xl p-4 shadow-sm transition-all cursor-pointer ${
                  notif.read
                    ? "bg-white border-gray-200 hover:shadow-md"
                    : "bg-yellow-50 border-yellow-300 hover:bg-yellow-100"
                }`}
                onClick={() => toggleRead(notif.id)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-md font-semibold text-slate-800">
                    {notif.title}
                  </h2>
                  <span className="text-xs text-gray-500">{notif.date}</span>
                </div>

                <p className="text-gray-700 text-sm mt-2">{notif.message}</p>

                <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
                  <span>
                    {notif.course && (
                      <>
                        <strong>{notif.course}</strong> •{" "}
                      </>
                    )}
                    {notif.professor}
                  </span>
                  {!notif.read && (
                    <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      Novo
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
