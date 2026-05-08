"use client";

import { useState } from "react";
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Column {
  header: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title?: string;
}

export default function DataTable({ columns, data, title }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) => {
    const searchStr = searchTerm.toLowerCase();
    // Search in all columns defined in the columns prop
    return columns.some(col => {
      const val = row[col.accessor];
      return val && val.toString().toLowerCase().includes(searchStr);
    }) || 
    // Also fallback to searching all string/number values in the row
    Object.values(row).some(val => 
      (typeof val === 'string' || typeof val === 'number') && 
      val.toString().toLowerCase().includes(searchStr)
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {title && <h3 className="text-lg font-bold">{title}</h3>}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 pl-10 pr-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm focus:ring-2 focus:ring-algerian-green/20 w-64 transition-all"
            />
          </div>
          <button className="h-10 px-4 rounded-xl border border-zinc-200 dark:border-zinc-700 flex items-center gap-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <Filter size={16} />
            Filtrer
          </button>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                {columns.map((col, i) => (
                  <th key={i} className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {col.header}
                  </th>
                ))}
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-algerian-green/[0.02] transition-colors group">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 text-sm">
                      {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 transition-all">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-zinc-50/30 dark:bg-zinc-800/30 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <p className="text-xs text-zinc-500">
            Affichage de <span className="font-bold">{filteredData.length}</span> sur <span className="font-bold">{data.length}</span> entrées
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 disabled:opacity-50">
              <ChevronLeft size={16} />
            </button>
            <button className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
