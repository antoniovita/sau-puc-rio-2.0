"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  if (isLogin) {
    return (
      <html lang="en">
        <body className={`${poppins.className} antialiased bg-gray-50`}>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
            <div className="p-4 lg:p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
