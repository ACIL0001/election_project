"use client";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { DataProvider } from "./context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dir } = useLanguage();

  return (
    <DataProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          dir === 'rtl' ? 'pr-72 pl-0' : 'pl-72 pr-0'
        )}>
          <Header />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </DataProvider>
  );
}
