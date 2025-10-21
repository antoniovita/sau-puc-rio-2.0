// app/disciplinas/layout.tsx
import React from "react";

export default function DisciplinasLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 lg:left-64 bg-gray-50 overscroll-none"> 
      <div className="h-full overflow-hidden p-4 lg:p-8"> 
        {children}
      </div>
    </div>
  );
}
