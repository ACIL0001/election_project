"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Shield,
  Mail, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff,
  AlertCircle,
  Activity
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { api } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading: authLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isElectionDayOpen, setIsElectionDayOpen] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    // Check if election day is open
    api.get<{ ok: boolean; is_election_day_open: boolean }>("/settings/public")
      .then(data => {
        if (data && typeof data.is_election_day_open === "boolean") {
          setIsElectionDayOpen(data.is_election_day_open);
        } else {
          setIsElectionDayOpen(true); // Fallback
        }
      })
      .catch(() => {
        setIsElectionDayOpen(true); // Fallback to true if network error
      });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await login(formData.email, formData.password);
      router.push("/");
    } catch (err: any) {
      setError(err?.message || "Échec de l'authentification. Vérifiez vos identifiants.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      <AnimatePresence>
        {isElectionDayOpen === false && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-[90%] max-w-[400px] bg-zinc-900/80 border border-white/10 rounded-[32px] p-8 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Decorative inner glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)' }} />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                  <Shield size={36} className="text-red-500" />
                </div>
                
                <h2 className="text-2xl font-black text-white mb-3">Accès Restreint</h2>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Le système d&apos;observation n&apos;est pas encore ouvert pour le jour de l&apos;élection. 
                  L&apos;accès sera activé par l&apos;Administration Centrale le moment venu.
                </p>
                
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <Activity size={16} />
                  Réessayer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Background Lighting */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 0%, rgba(0, 98, 51, 0.08) 0%, transparent 40%)"
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px] z-10"
      >
        {/* Branding Section */}
        <div className="text-center mb-6">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-900/50 border border-white/5 mb-4 backdrop-blur-xl"
          >
            <ShieldCheck size={28} className="text-emerald-500" strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-2xl md:text-[28px] font-bold text-white tracking-tight leading-tight mb-2">
            ANIE Jour d&apos;Élection <br />Portail Observateur
          </h1>
          <p className="text-zinc-500 text-sm font-medium">
            Accès Observateur Sécurisé
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-morphism rounded-[28px] p-6 md:p-8 border border-white/5 bg-[#0f0f12]/75 backdrop-blur-2xl relative">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight">Bienvenue</h2>
            <p className="text-zinc-500 text-[13px] mt-1">Authentifiez-vous pour continuer</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2"
            >
              <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
              <span className="text-[12px] font-bold text-red-400">{error}</span>
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">Identifiant Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={16} className="text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input 
                  required
                  type="email" 
                  placeholder="observateur@anie.dz"
                  className="w-full h-[50px] pl-11 pr-4 rounded-[12px] bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm font-medium"
                  value={formData.email}
                  onChange={(e) => { setFormData({...formData, email: e.target.value}); setError(null); }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">Mot de Passe Sécurisé</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={16} className="text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input 
                  required
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••••••"
                  className="w-full h-[50px] pl-11 pr-11 rounded-[12px] bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all text-sm font-medium"
                  value={formData.password}
                  onChange={(e) => { setFormData({...formData, password: e.target.value}); setError(null); }}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-600 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full h-[50px] mt-2 rounded-[12px] bg-gradient-to-br from-[#006233] to-[#008c5a] text-white text-sm font-bold tracking-tight hover:translate-y-[-1px] active:scale-[0.98] transition-all flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Vérification…</span>
                </div>
              ) : (
                <>
                  <span>Accéder au Portail</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-4 flex flex-col items-center gap-3">
            <button
              type="button"
              className="text-[10px] font-bold text-zinc-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              Mot de passe oublié ?
            </button>
          </div>

          {/* Card Footer */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-2">
            <Shield size={12} className="text-zinc-600" />
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Infrastructure Gouvernementale Sécurisée</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative Blur Orbs */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}
