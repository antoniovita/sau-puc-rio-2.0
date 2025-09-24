//general imports
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

//style
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//components
import Sidebar from "../components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SAU",
  description: "Sistema acadêmico da PUC - Rio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
