"use client";

import { useState } from "react";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import { 
  MapPin, 
  Building2, 
  Vote, 
  ChevronRight,
  Search,
  Users,
  Plus,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const wilayas = [
  { id: 1, name: "Adrar", num_wilaya: "01", seats_count: 12, communes: 28, centers: 142, desks: 840 },
  { id: 16, name: "Alger", num_wilaya: "16", seats_count: 35, communes: 57, centers: 612, desks: 2450 },
  { id: 31, name: "Oran", num_wilaya: "31", seats_count: 22, communes: 26, centers: 215, desks: 1120 },
];

const communes = [
  { id: 1, name: "Sidi M'hamed", num_bladia: "01", wilaya: "Alger", centers: 12, desks: 84 },
  { id: 2, name: "Bab El Oued", num_bladia: "05", wilaya: "Alger", centers: 8, desks: 56 },
  { id: 3, name: "Es Senia", num_bladia: "12", wilaya: "Oran", centers: 10, desks: 70 },
];

const centers = [
  { id: 1, name: "Centre Pasteur", location: "Rue Didouche Mourad", male: 2400, female: 2400, total: 4800, numbers_desks: 12 },
  { id: 2, name: "Centre Ibn Badis", location: "Place du 1er Mai", male: 1600, female: 1600, total: 3200, numbers_desks: 8 },
  { id: 3, name: "Centre Emir Abdelkader", location: "Boulevard des Martyrs", male: 2000, female: 2000, total: 4000, numbers_desks: 10 },
];

const desks = [
  { id: 1, num_desk: "01", center: "Centre Pasteur", male: 200, female: 200, total: 400 },
  { id: 2, num_desk: "02", center: "Centre Pasteur", male: 150, female: 150, total: 300 },
  { id: 3, num_desk: "01", center: "Centre Ibn Badis", male: 250, female: 230, total: 480 },
];

export default function InfrastructureSetup() {
  const [activeTab, setActiveTab] = useState<"wilayas" | "communes" | "centers" | "desks">("wilayas");
  const [selectedWilaya, setSelectedWilaya] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"wilaya" | "commune" | "center" | "desk">("center");

  const openModal = (type: "wilaya" | "commune" | "center" | "desk") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const tabs = [
    { id: "wilayas", label: "Wilayas", icon: Globe },
    { id: "communes", label: "Communes", icon: MapPin },
    { id: "centers", label: "Centres", icon: Building2 },
    { id: "desks", label: "Bureaux", icon: Vote },
  ] as const;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Infrastructure Ã‰lectorale</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Gérez la hiérarchie administrative et les lieux de vote.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => openModal(activeTab === 'wilayas' ? 'wilaya' : activeTab === 'communes' ? 'commune' : activeTab === 'centers' ? 'center' : 'desk')}
            className="h-11 px-6 rounded-xl bg-algerian-green text-white text-sm font-bold shadow-lg shadow-algerian-green/20 hover:bg-algerian-green-dark transition-all flex items-center gap-2"
          >
            <Plus size={18} />
            Ajouter {activeTab === 'wilayas' ? 'Wilaya' : activeTab === 'communes' ? 'Commune' : activeTab === 'centers' ? 'Centre' : 'Bureau'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
              activeTab === tab.id
                ? "bg-white dark:bg-zinc-800 text-algerian-green shadow-sm"
                : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
            )}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Infrastructure Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={
          modalType === "wilaya" ? "Ajouter une Wilaya" : 
          modalType === "commune" ? "Ajouter une Commune" : 
          modalType === "center" ? "Ajouter un Centre de Vote" : "Ajouter un Bureau"
        }
      >
        <form className="space-y-4 max-h-[70vh] overflow-y-auto px-1">
          {modalType === "wilaya" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Code Wilaya</label>
                  <input type="text" placeholder="Ex: 16" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Numéro Wilaya</label>
                  <input type="number" placeholder="Ex: 16" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Nom de la Wilaya</label>
                <input type="text" placeholder="Ex: Alger" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Sièges disponibles</label>
                <input type="number" placeholder="Ex: 12" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
              </div>
            </div>
          )}

          {modalType === "commune" && (
            <div className="space-y-4">
               <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Wilaya Parente</label>
                <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                  {wilayas.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Nom de la Commune</label>
                  <input type="text" placeholder="Ex: Sidi M'hamed" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Numéro Commune</label>
                  <input type="number" placeholder="Ex: 01" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
              </div>
            </div>
          )}

          {modalType === "center" && (
            <div className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Wilaya</label>
                  <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    {wilayas.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Commune</label>
                  <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    <option>Sidi M'hamed</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Nom du Centre</label>
                <input type="text" placeholder="Ex: Centre Pasteur" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Localisation Exacte</label>
                <input type="text" placeholder="Adresse ou coordonnées" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase">Hommes</label>
                  <input type="number" placeholder="0" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase">Femmes</label>
                  <input type="number" placeholder="0" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase">Total</label>
                  <input type="number" placeholder="0" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-algerian-green font-bold" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Nombre de Bureaux</label>
                <input type="number" placeholder="Ex: 12" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
              </div>
            </div>
          )}

          {modalType === "desk" && (
            <div className="space-y-4">
               <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Centre Parent</label>
                <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                  {centers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-500 uppercase">Numéro du Bureau</label>
                <input type="text" placeholder="Ex: 01" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase">Hommes</label>
                  <input type="number" placeholder="0" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase">Femmes</label>
                  <input type="number" placeholder="0" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase">Total</label>
                  <input type="number" placeholder="0" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-algerian-green font-bold" />
                </div>
              </div>
            </div>
          )}

          <div className="pt-4 flex gap-3">
            <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-bold">Annuler</button>
            <button type="submit" className="flex-1 h-12 rounded-xl bg-algerian-green text-white text-sm font-bold shadow-lg shadow-algerian-green/20">Enregistrer</button>
          </div>
        </form>
      </Modal>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "wilayas" && (
          <DataTable 
            title="Liste des Wilayas"
            columns={[
              { header: "N° Wilaya", accessor: "num_wilaya" },
              { header: "Nom Wilaya", accessor: "name", render: (val) => <span className="font-bold">{val}</span> },
              { header: "Sièges disponibles", accessor: "seats_count" },
              { header: "Communes", accessor: "communes" },
              { header: "Centres", accessor: "centers" },
            ]}
            data={wilayas}
          />
        )}

        {activeTab === "communes" && (
          <DataTable 
            title="Liste des Communes (Baladias)"
            columns={[
              { header: "N° Bladia", accessor: "num_bladia" },
              { header: "Nom Commune", accessor: "name", render: (val) => <span className="font-bold">{val}</span> },
              { header: "Wilaya", accessor: "wilaya" },
              { header: "Centres", accessor: "centers" },
              { header: "Bureaux", accessor: "desks" },
            ]}
            data={communes}
          />
        )}

        {activeTab === "centers" && (
          <DataTable 
            title="Centres de Vote"
            columns={[
              { header: "Nom du Centre", accessor: "name", render: (val) => <span className="font-bold">{val}</span> },
              { header: "Localisation", accessor: "location" },
              { header: "Hommes", accessor: "male" },
              { header: "Femmes", accessor: "female" },
              { header: "Total", accessor: "total", render: (val) => <span className="text-algerian-green font-bold">{val.toLocaleString()}</span> },
              { header: "Bureaux", accessor: "numbers_desks" },
            ]}
            data={centers}
          />
        )}

        {activeTab === "desks" && (
          <DataTable 
            title="Bureaux de Vote"
            columns={[
              { header: "N° Bureau", accessor: "num_desk", render: (val) => <span className="font-bold">{val}</span> },
              { header: "Centre Parent", accessor: "center" },
              { header: "Hommes", accessor: "male" },
              { header: "Femmes", accessor: "female" },
              { header: "Total Inscrits", accessor: "total", render: (val) => <span className="text-algerian-green font-bold">{val}</span> },
            ]}
            data={desks}
          />
        )}
      </motion.div>
    </div>
  );
}



