"use client";

import { useState } from "react";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import { 
  UserPlus, 
  Shield, 
  UserRound, 
  Key,
  BadgeCheck,
  Building2,
  MapPin,
  Clock,
  CheckCircle2,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const admins = [
  { id: 1, name: "Mohamed Amine", email: "m.amine@anie.dz", nin: "123456789012345678", phone: "0550123456", role: "Super Admin", status: "Actif" },
  { id: 2, name: "Fatima Zohra", email: "f.zohra@anie.dz", nin: "987654321098765432", phone: "0550987654", role: "Admin Wilaya (Alger)", status: "Actif" },
  { id: 3, name: "Abdelkader Ben", email: "a.ben@anie.dz", nin: "555555555555555555", phone: "0550555555", role: "Admin Baladia (Oran)", status: "Inactif" },
];

const observers = [
  { id: 1, name: "Yassine Brahimi", email: "y.brahimi@gmail.com", nin: "111222333444555666", phone: "0660112233", birthday: "1985-05-20", party: "FLN", goal: "Surveillance générale du centre Pasteur", location: "Alger, Sidi M'hamed", admin_commun: "Abdelkader Ben" },
  { id: 2, name: "Lina Mahrez", email: "l.mahrez@outlook.com", nin: "777888999000111222", phone: "0660998877", birthday: "1992-11-12", party: "MSP", goal: "Contrôle des listes électorales", location: "Blida, Ouled Yaïch", admin_commun: "Ahmed Said" },
];

const dayRoles = [
  { id: 1, name: "Karim Slimani", nin: "444555666777888999", phone: "0770445566", role: "Observateur Bureau", center: "Centre Pasteur", id_desk: "08", time: "08:00", date: "2024-06-12" },
  { id: 2, name: "Sara Haddad", nin: "222333444555666777", phone: "0770223344", role: "Chef de Centre", center: "Centre Ibn Badis", id_desk: "N/A", time: "07:00", date: "2024-06-12" },
];

export default function GestionAcces() {
  const [activeTab, setActiveTab] = useState("admins");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"admin" | "member" | "observer">("admin");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    wilaya: "",
    baladia: "",
    center: "",
    desk: "",
  });

  const tabs = [
    { id: "admins", label: "Administration", icon: Shield },
    { id: "members", label: "Membres Actifs", icon: UserRound },
    { id: "observers", label: "Observateurs Jour-J", icon: Key },
  ];

  const openModal = (mode: "admin" | "member" | "observer") => {
    setModalMode(mode);
    setNewUser({ ...newUser, role: mode === 'admin' ? 'admin_wilaya' : mode === 'member' ? 'membre_actif' : 'obs_center' });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creation:", modalMode, newUser);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gestion des Accès</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Gérez les permissions et les utilisateurs du système par module.</p>
        </div>
        <div className="flex gap-3">
          {activeTab === "admins" && (
            <button onClick={() => openModal("admin")} className="bg-algerian-green text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg transition-all active:scale-95">
              <Shield size={18} /> Ajouter Admin
            </button>
          )}
          {activeTab === "members" && (
            <button onClick={() => openModal("member")} className="bg-algerian-green text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg transition-all active:scale-95">
              <UserRound size={18} /> Ajouter Membre
            </button>
          )}
          {activeTab === "observers" && (
            <button onClick={() => openModal("observer")} className="bg-algerian-green text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg transition-all active:scale-95">
              <Key size={18} /> Ajouter Observateur
            </button>
          )}
        </div>
      </div>

      {/* Modal de Création Dédié */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={
          modalMode === "admin" ? "Module Administration - Nouvel Admin" :
          modalMode === "member" ? "Module Membres - Nouveau Membre Actif" :
          "Module Jour-J - Nouvel Observateur"
        }
      >
        <form onSubmit={handleSubmit} className="space-y-5 max-h-[70vh] overflow-y-auto px-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1 col-span-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Nom Complet</label>
              <input type="text" placeholder="Ex: Mohamed Amine" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 outline-none transition-all" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 uppercase">Email</label>
              <input type="email" placeholder="m.amine@anie.dz" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-500 uppercase">Téléphone</label>
              <input type="text" placeholder="05XX XX XX XX" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
            </div>

            <div className="space-y-1 col-span-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">NIN (Numéro d'Identification National)</label>
              <input type="text" placeholder="Numéro à 18 chiffres" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
            </div>

            {modalMode === "admin" && (
              <div className="space-y-1 col-span-2">
                <label className="text-xs font-bold text-zinc-500 uppercase">Niveau d'Administration</label>
                <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 outline-none" value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
                  <option value="admin_wilaya">Admin Wilaya</option>
                  <option value="admin_baladia">Admin Commun (Baladia)</option>
                </select>
              </div>
            )}

            {modalMode === "member" && (
              <>
                <div className="space-y-1 col-span-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Date de Naissance</label>
                  <input type="date" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1 col-span-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Admin Commun Responsable (Baladia)</label>
                  <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    <option>Choisir Admin Commun</option>
                    <option>Abdelkader Ben (Oran)</option>
                    <option>Ahmed Said (Alger)</option>
                  </select>
                </div>
                <div className="space-y-1 col-span-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Objectif du Membre Actif</label>
                  <textarea className="w-full p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" rows={2} placeholder="Description de l'activité..."></textarea>
                </div>
              </>
            )}

            {modalMode === "observer" && (
              <>
                <div className="space-y-1 col-span-2">
                   <label className="text-xs font-bold text-zinc-500 uppercase">Rôle Jour-J</label>
                   <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 outline-none" value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
                    <option value="obs_center">Observateur Centre</option>
                    <option value="obs_desk">Observateur Bureau</option>
                  </select>
                </div>
                <div className="space-y-1 col-span-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Centre</label>
                  <input type="text" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" placeholder="Nom du centre" />
                </div>
                {newUser.role === "obs_desk" && (
                  <div className="space-y-1 col-span-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase">ID Bureau</label>
                    <input type="text" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" placeholder="N° Bureau" />
                  </div>
                )}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Heure Début</label>
                  <input type="time" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Date</label>
                  <input type="date" className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
                </div>
              </>
            )}

            {modalMode !== "observer" && (
              <div className="grid grid-cols-2 gap-4 col-span-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Wilaya</label>
                  <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    <option>Choisir Wilaya</option>
                    <option value="16">Alger</option>
                    <option value="31">Oran</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Commune</label>
                  <select className="w-full h-11 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    <option>Choisir Commune</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-zinc-500 uppercase">Photo / Image</label>
            <div className="h-24 w-full border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 text-xs font-medium cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              Cliquez pour uploader
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">Annuler</button>
            <button type="submit" className="flex-1 h-12 rounded-xl bg-algerian-green text-white text-sm font-bold shadow-lg shadow-algerian-green/20 hover:bg-algerian-green-dark transition-all">Confirmer l'Ajout</button>
          </div>
        </form>
      </Modal>

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

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "admins" && (
            <DataTable 
              columns={[
                { header: "Nom Complet", accessor: "name", render: (val, row) => (
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold text-xs">
                      {val.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{val}</span>
                      <span className="text-[10px] text-zinc-400">{row.email}</span>
                    </div>
                  </div>
                )},
                { header: "NIN", accessor: "nin" },
                { header: "Téléphone", accessor: "phone" },
                { header: "Rôle", accessor: "role" },
                { header: "Statut", accessor: "status", render: (val) => (
                  <span className={cn(
                    "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
                    val === 'Actif' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800"
                  )}>
                    {val}
                  </span>
                )},
              ]}
              data={admins}
            />
          )}

          {activeTab === "members" && (
            <DataTable 
              columns={[
                { header: "Membre Permanent", accessor: "name", render: (val, row) => (
                   <div className="flex flex-col">
                    <span className="font-bold">{val}</span>
                    <span className="text-[10px] text-zinc-400">{row.email}</span>
                  </div>
                )},
                { header: "NIN", accessor: "nin" },
                { header: "Admin Commun Resp.", accessor: "admin_commun", render: (val) => (
                  <div className="flex items-center gap-1.5">
                    <Shield size={14} className="text-algerian-green" />
                    <span className="text-xs font-bold">{val}</span>
                  </div>
                )},
                { header: "Objectif (Goal)", accessor: "goal", render: (val) => (
                  <span className="text-[10px] text-zinc-500 truncate max-w-[200px]">{val}</span>
                )},
                { header: "Statut", accessor: "status", render: () => (
                  <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 px-2 py-1 rounded text-[10px] font-bold uppercase">Permanent</span>
                )},
              ]}
              data={observers.filter(o => o.party === 'FLN')} // Mocking: FLN members are permanent
            />
          )}

          {activeTab === "observers" && (
            <div className="space-y-6">
              <DataTable 
                columns={[
                  { header: "Nom Complet", accessor: "name" },
                  { header: "Fonction Jour-J", accessor: "role" },
                  { header: "Affectation (C/B)", accessor: "location", render: (val, row) => (
                    <div className="flex flex-col text-xs">
                      <span className="font-bold">{row.center}</span>
                      <span className="text-zinc-500">Bureau {row.id_desk}</span>
                    </div>
                  )},
                  { header: "NIN / Tél", accessor: "nin", render: (val, row) => (
                    <div className="flex flex-col text-[10px]">
                      <span>{val}</span>
                      <span className="text-zinc-400">{row.phone}</span>
                    </div>
                  )},
                  { header: "Temps / Date", accessor: "time", render: (val, row) => (
                    <div className="flex flex-col text-[10px] font-bold">
                      <span className="text-algerian-green">{val}</span>
                      <span>{row.date}</span>
                    </div>
                  )},
                ]}
                data={dayRoles}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
