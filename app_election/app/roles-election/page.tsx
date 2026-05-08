"use client";

import { useState } from "react";
import DataTable from "../components/DataTable";
import { 
  Key, 
  Calendar, 
  ShieldAlert, 
  Plus,
  QrCode,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const dayRoles = [
  { id: 1, name: "Karim Slimani", role: "Observateur Bureau", location: "Centre Pasteur - Bureau 08", code: "TMP-882-X", status: "Actif", expires: "20:00" },
  { id: 2, name: "Sara Haddad", role: "Chef de Centre", location: "Centre Ibn Badis", code: "TMP-441-Y", status: "Actif", expires: "22:00" },
  { id: 3, name: "Ahmed Mansour", role: "Observateur", location: "Centre Emir Abdelkader", code: "TMP-901-Z", status: "Expiré", expires: "08:00 (Fermé)" },
];

export default function RolesElection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Rôles Jour-J</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Gérez les accès temporaires pour le jour du scrutin.</p>
        </div>
        <button className="bg-algerian-green hover:bg-algerian-green-dark text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-algerian-green/20 transition-all active:scale-95">
          <Plus size={18} />
          Générer des Accès
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass rounded-3xl p-6 border border-amber-500/20 bg-amber-500/5">
           <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
              <ShieldAlert size={20} />
           </div>
           <h3 className="font-bold text-sm mb-1">Expiration Automatique</h3>
           <p className="text-xs text-zinc-500">Tous les accès temporaires expirent à H+2 après la clôture des bureaux.</p>
        </div>
        <div className="glass rounded-3xl p-6 border border-algerian-green/20 bg-algerian-green/5">
           <div className="h-10 w-10 rounded-xl bg-algerian-green/10 flex items-center justify-center text-algerian-green mb-4">
              <QrCode size={20} />
           </div>
           <h3 className="font-bold text-sm mb-1">Authentification QR</h3>
           <p className="text-xs text-zinc-500">Les observateurs peuvent utiliser le code généré pour se connecter via l'application mobile.</p>
        </div>
        <div className="glass rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800">
           <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 mb-4">
              <Users size={20} />
           </div>
           <h3 className="font-bold text-sm mb-1">Volume Actif</h3>
           <p className="text-xs text-zinc-500">Actuellement <span className="font-bold text-algerian-green">4,210</span> accès temporaires sont actifs sur le territoire.</p>
        </div>
      </div>

      <DataTable 
        columns={[
          { header: "Personnel", accessor: "name", render: (val) => (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Calendar size={14} />
              </div>
              <span className="font-bold">{val}</span>
            </div>
          )},
          { header: "Fonction", accessor: "role" },
          { header: "Affectation", accessor: "location" },
          { header: "Code d'Accès", accessor: "code", render: (val) => (
            <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded font-mono text-xs text-algerian-green font-bold">
              {val}
            </code>
          )},
          { header: "Statut", accessor: "status", render: (val) => (
            <span className={cn(
              "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider",
              val === 'Actif' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800"
            )}>
              {val}
            </span>
          )},
          { header: "Validité Jusqu'à", accessor: "expires" },
        ]}
        data={dayRoles}
      />
    </div>
  );
}
