"use client";

import { useState } from "react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <DataProvider>
      <div className="flex min-h-screen relative w-full overflow-x-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className={cn(
          "flex-1 flex flex-col transition-all duration-300 w-full min-w-0",
          dir === 'rtl' ? 'lg:pr-72 pl-0' : 'lg:pl-72 pr-0'
        )}>
          <Header toggleSidebar={() => setIsSidebarOpen(true)} />
          <main className="flex-1 p-4 lg:p-8 w-full">
            {children}
          </main>
        </div>
      </div>
    </DataProvider>
  );
}
