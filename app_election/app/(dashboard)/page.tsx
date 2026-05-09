"use client";

import { 
  Users, 
  MapPin, 
  Vote, 
  FileCheck, 
  ArrowUpRight, 
  Clock,
  CheckCircle2,
  AlertCircle,
  Flag,
  Shield,
  Building2,
  Key,
  Activity,
  Zap,
  Globe,
  Database
} from "lucide-react";
import StatCard from "./components/StatCard";
import { motion } from "framer-motion";
import { useData } from "./context/DataContext";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Dashboard() {
  const { 
    wilayasData, 
    communesData, 
    centersData, 
    desksData, 
    partiesData, 
    candidatesData, 
    adminsData, 
    membersData, 
    observersData 
  } = useData();
  const { t, language, dir } = useLanguage();

  const recentActivity = [
    { id: 1, type: "success", title: language === 'ar' ? "تم التحقق من محضر التصويت" : "PV de Vote Validé", bureau: language === 'ar' ? "مكتب 04 - مركز ابن باديس" : "Bureau 04 - Centre Ibn Badis", location: language === 'ar' ? "الجزائر، سيدي امحمد" : "Alger, Sidi M'hamed", time: language === 'ar' ? "2 د" : "2 min" },
    { id: 2, type: "warning", title: language === 'ar' ? "تم كشف فرق في الإدخال" : "Écart de Saisie Détecté", bureau: language === 'ar' ? "مكتب 12 - مركز السانية" : "Bureau 12 - Centre Es Senia", location: language === 'ar' ? "وهران، السانية" : "Oran, Es Senia", time: language === 'ar' ? "5 د" : "5 min" },
    { id: 3, type: "success", title: language === 'ar' ? "تم تقديم محضر الاقتراع" : "PV de Scrutin Soumis", bureau: language === 'ar' ? "مكتب 01 - مركز 1 نوفمبر" : "Bureau 01 - Centre 1er Novembre", location: language === 'ar' ? "قسنطينة، الخروب" : "Constantine, El Khroub", time: language === 'ar' ? "12 د" : "12 min" },
    { id: 4, type: "info", title: language === 'ar' ? "افتتاح المكتب 08" : "Ouverture du Bureau 08", bureau: language === 'ar' ? "مكتب 08 - مركز باستور" : "Bureau 08 - Centre Pasteur", location: language === 'ar' ? "بجاية، أقبو" : "Bejaia, Akbou", time: language === 'ar' ? "45 د" : "45 min" },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2 flex-1 flex-shrink-0"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-algerian-green/10 border border-algerian-green/20 w-fit">
            <Zap size={12} className="text-algerian-green" />
            <span className="text-[10px] font-black uppercase tracking-widest text-algerian-green">{t("dash.badge")}</span>
          </div>
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white lg:text-4xl lg:whitespace-nowrap font-plus-jakarta">
            {t("dash.title")}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium max-w-2xl leading-relaxed w-full min-w-[300px]">
            {t("dash.subtitle")}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4 bg-white dark:bg-zinc-900/50 p-2 rounded-2xl border border-zinc-200 dark:border-white/5"
        >
          <div className="px-6 py-3 border-r border-zinc-100 dark:border-white/5">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{language === 'ar' ? 'الحالة العامة' : 'Status Global'}</p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-wider">{language === 'ar' ? 'متزامن' : 'Synchronisé'}</span>
            </div>
          </div>
          <div className="px-6 py-3">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{language === 'ar' ? 'تحديث' : 'Mise à jour'}</p>
            <span className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-wider">{language === 'ar' ? 'فوري' : 'INSTANTANÉ'}</span>
          </div>
        </motion.div>
      </div>

      {/* Primary KPI Grid (Hero Metrics) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard title={language === 'ar' ? 'إجمالي الولايات' : 'Total Wilayas'} value={wilayasData.length} icon={Globe} trend={{ value: "100%", isPositive: true }} delay={0} />
        <StatCard title={t("dash.kpi.desks")} value={desksData.length} icon={Vote} trend={{ value: "4.2%", isPositive: true }} delay={1} />
        <StatCard title={language === 'ar' ? 'الموظفين النشطين' : 'Personnel Actif'} value={observersData.length + membersData.length} icon={Users} trend={{ value: "12.5%", isPositive: true }} delay={2} />
        <StatCard title={language === 'ar' ? 'المترشحين المسجلين' : 'Candidats Inscrits'} value={candidatesData.length} icon={Flag} trend={{ value: "2.1%", isPositive: true }} delay={3} />
      </motion.div>

      {/* Advanced Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Operational Pulse - 8 Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-8 glass rounded-[32px] p-8 border-white/5 relative overflow-hidden"
        >
          {/* Ambient Background Light */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-algerian-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-white">{language === 'ar' ? 'تقدم عملية المصادقة' : 'Progression de la Validation'}</h2>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">{language === 'ar' ? 'مراقبة محاضر النتائج (PV)' : 'Surveillance des Procès-Verbaux (PV)'}</p>
              </div>
              <button className="h-10 px-4 rounded-xl bg-algerian-green text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:bg-algerian-green-dark transition-all">
                {language === 'ar' ? 'فتح لوحة التحكم' : 'Ouvrir Console'} <ArrowUpRight size={16} className={cn(language === 'ar' && "rotate-[270deg]")} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1">{language === 'ar' ? 'المعدل الوطني' : 'Taux National'}</span>
                  <span className="text-5xl font-black tracking-tighter text-algerian-green dark:text-white">78.3<span className="text-2xl">%</span></span>
                </div>
                <div className="h-2 w-full bg-zinc-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "78.3%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-algerian-green to-algerian-green-light"
                  />
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-3 gap-4">
                {[
                  { label: language === 'ar' ? "تمت المصادقة" : "Validés", value: "48,210", color: "text-emerald-500", icon: CheckCircle2 },
                  { label: language === 'ar' ? "نزاعات" : "Litiges", value: "1,190", color: "text-algerian-red", icon: AlertCircle },
                  { label: language === 'ar' ? "في الانتظار" : "Attente", value: "12,143", color: "text-amber-500", icon: Clock },
                ].map((item, i) => (
                  <div key={i} className="glass dark:bg-white/5 p-4 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white dark:hover:bg-white/10 transition-all duration-300">
                    <item.icon size={20} className={cn("mb-2 opacity-50 group-hover:opacity-100 transition-opacity", item.color)} />
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{item.label}</span>
                    <span className={cn("text-lg font-black tracking-tight", item.color)}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Metric Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="glass dark:bg-white/5 p-6 rounded-2xl border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400">
                    <Database size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{language === 'ar' ? 'سلامة البيانات' : 'Intégrité des Données'}</p>
                    <p className="text-xl font-black text-zinc-900 dark:text-white">99.98%</p>
                  </div>
                </div>
                <div className="h-8 w-24 bg-zinc-50 dark:bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="h-3 w-1 bg-algerian-green rounded-full" />)}
                  </div>
                </div>
              </div>

              <div className="glass dark:bg-white/5 p-6 rounded-2xl border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center text-zinc-400">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{language === 'ar' ? 'حمولة النظام' : 'Charge Système'}</p>
                    <p className="text-xl font-black text-zinc-900 dark:text-white">24ms</p>
                  </div>
                </div>
                <div className="h-8 w-24 bg-zinc-50 dark:bg-white/5 rounded-lg flex items-center justify-center">
                   <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Intelligence Feed - 4 Columns */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-4 glass rounded-[32px] p-8 border-white/5 relative flex flex-col h-full"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black tracking-tight text-zinc-900 dark:text-white">{t("dash.recent.title")}</h2>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-zinc-50 dark:bg-white/5 border border-white/5 text-[10px] font-bold text-zinc-500">
              {language === 'ar' ? 'مباشر' : 'LIVE'}
            </div>
          </div>

          <div className="flex-1 space-y-8 relative">
            {/* Timeline Line */}
            <div className={cn(
              "absolute top-2 bottom-2 w-[2px] bg-zinc-100 dark:bg-white/5",
              dir === 'rtl' ? 'right-[9px]' : 'left-[9px]'
            )} />

            {recentActivity.map((activity, i) => (
              <motion.div 
                key={activity.id} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex gap-4 relative z-10 group"
              >
                <div className="mt-1 relative">
                  <div className={cn(
                    "h-5 w-5 rounded-full border-4 border-white dark:border-[#09090b] transition-transform group-hover:scale-125",
                    activity.type === 'success' ? "bg-emerald-500" : 
                    activity.type === 'warning' ? "bg-algerian-red" : "bg-blue-500"
                  )} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] font-black tracking-tight text-zinc-900 dark:text-white">{activity.title}</p>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase">{activity.time}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{activity.bureau}</p>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                    <MapPin size={10} />
                    {activity.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="mt-8 w-full h-12 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[11px] font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all">
            {language === 'ar' ? 'عرض السجل كاملاً' : 'Voir tout le journal'}
          </button>
        </motion.div>

      </div>
    </div>
  );
}
