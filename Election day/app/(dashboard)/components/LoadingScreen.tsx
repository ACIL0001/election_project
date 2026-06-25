"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function LoadingScreen() {
  const { language } = useLanguage();

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md transition-all">
      <div className="flex flex-col items-center gap-6 p-8 rounded-3xl border border-zinc-200/50 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 shadow-2xl backdrop-blur-xl max-w-sm text-center relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Logo with pulse animation */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-xl animate-pulse" />
          <img
            src="/Parti_Voix_du_peuple.png"
            alt="PVP Logo"
            className="h-28 w-28 object-contain shrink-0 scale-110 relative z-10 animate-bounce duration-[2000ms]"
          />
        </div>

        {/* Status texts */}
        <div className="space-y-2 relative z-10">
          <h2 className="text-lg font-black text-zinc-900 dark:text-white font-plus-jakarta">
            {language === "ar" ? "جاري الاتصال الآمن..." : "Connexion sécurisée en cours..."}
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <Loader2 className="w-3.5 h-3.5 text-emerald-500 animate-spin" />
            {language === "ar" ? "تحميل البيانات..." : "Chargement des données..."}
          </p>
        </div>
      </div>
    </div>
  );
}
