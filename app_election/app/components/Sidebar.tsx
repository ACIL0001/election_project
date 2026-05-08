"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  MapPin, 
  Flag, 
  CheckCircle, 
  Settings, 
  Calendar,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Tableau de Bord", href: "/", icon: LayoutDashboard },
  { name: "Gestion des Accès", href: "/gestion-acces", icon: Users },
  { name: "Infrastructure", href: "/infrastructure", icon: MapPin },
  { name: "Entités Politiques", href: "/entites-politiques", icon: Flag },
  { name: "Validation", href: "/validation", icon: CheckCircle },
  { name: "Rôles Jour-J", href: "/roles-election", icon: Calendar },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col sidebar-glass fixed left-0 top-0 z-40">
      <div className="flex h-20 items-center justify-center border-b border-algerian-green/10">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-algerian-green flex items-center justify-center text-white shadow-lg shadow-algerian-green/20">
            <ShieldCheck size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-algerian-green dark:text-algerian-green-light">ANIE</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Algérie</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-algerian-green text-white shadow-md shadow-algerian-green/20"
                  : "text-zinc-600 hover:bg-algerian-green/5 hover:text-algerian-green dark:text-zinc-400 dark:hover:text-algerian-green-light"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 shrink-0 transition-colors",
                  isActive ? "text-white" : "text-zinc-400 group-hover:text-algerian-green dark:group-hover:text-algerian-green-light"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

    </div>
  );
}
