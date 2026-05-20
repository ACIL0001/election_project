"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  ShieldCheck,
  MapPin,
  Filter,
  Search,
  Building2,
  X,
  RotateCcw,
} from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import { useData } from "../context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { useQuery } from "@/lib/hooks/useApi";
import DataTable from "../components/DataTable";
import { cn } from "@/lib/utils";

type CitizenRow = {
  id: string;
  full_name: string;
  nin: string;
  phone: string;
  email: string;
  wilaya: string;
  commune: string;
  party: string;
  added_by: string;
};

function geoLabel(
  doc: { name_fr?: string; name_ar?: string; name?: string } | string | null | undefined,
  language: string
): string {
  if (!doc) return "\u2014";
  if (typeof doc === "string") return doc;
  if (language === "ar") return doc.name_ar || doc.name_fr || doc.name || "\u2014";
  return doc.name_fr || doc.name_ar || doc.name || "\u2014";
}

function mapCitizen(
  raw: Record<string, unknown>,
  language: string
): CitizenRow {
  const member = raw.member_actif as Record<string, unknown> | undefined;
  const wilayaDoc = (raw.wilaya || member?.wilaya) as Record<string, unknown> | string | undefined;
  const communeDoc = (raw.commune || member?.commune) as Record<string, unknown> | string | undefined;
  const partyDoc = raw.party as Record<string, unknown> | string | undefined;

  let party = "\u2014";
  if (partyDoc && typeof partyDoc === "object") {
    party = String(partyDoc.acronym || partyDoc.name || "\u2014");
  } else if (typeof partyDoc === "string") {
    party = partyDoc;
  }

  return {
    id: String(raw._id || raw.id),
    full_name: String(raw.full_name || ""),
    nin: String(raw.nin || ""),
    phone: String(raw.phone || ""),
    email: raw.email ? String(raw.email) : "\u2014",
    wilaya: geoLabel(wilayaDoc as { name_fr?: string; name_ar?: string; name?: string }, language),
    commune: geoLabel(communeDoc as { name_fr?: string; name_ar?: string; name?: string }, language),
    party,
    added_by: member?.full_name ? String(member.full_name) : "\u2014",
  };
}

const selectClass =
  "h-11 w-full rounded-xl border border-zinc-200/80 bg-white px-4 text-sm font-bold text-zinc-900 outline-none transition-colors focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-zinc-900/60 dark:text-white";

export default function CitoyensPage() {
  const { user } = useAuth();
  const { language, t, dir } = useLanguage();
  const { wilayasData, communesData } = useData();

  const isSuperAdmin = user?.role === "super_admin";
  const isAdminWilaya = user?.role === "admin_wilaya";
  const isAdminCommun = user?.role === "admin_commun";

  const [filterWilaya, setFilterWilaya] = useState("");
  const [filterCommune, setFilterCommune] = useState("");
  const [search, setSearch] = useState("");

  const scopedWilayas = useMemo(() => {
    if (isSuperAdmin) return wilayasData;
    if (user?.wilaya_id) {
      return wilayasData.filter((w) => String(w._id || w.id) === String(user.wilaya_id));
    }
    return wilayasData;
  }, [wilayasData, isSuperAdmin, user?.wilaya_id]);

  const filterWilayaId = useMemo(() => {
    if (isAdminWilaya && user?.wilaya_id) return String(user.wilaya_id);
    if (!filterWilaya) return undefined;
    const w = wilayasData.find((x) => String(x._id || x.id) === filterWilaya);
    return w ? String(w._id || w.id) : filterWilaya;
  }, [isAdminWilaya, user?.wilaya_id, filterWilaya, wilayasData]);

  const scopedCommunes = useMemo(() => {
    if (isAdminCommun && user?.commune_id) {
      return communesData.filter((c) => String(c._id || c.id) === String(user.commune_id));
    }
    if (isSuperAdmin || isAdminWilaya) {
      if (!filterWilayaId) {
        return isAdminWilaya
          ? communesData.filter((c) => String(c.wilaya_id) === String(user?.wilaya_id))
          : communesData;
      }
      return communesData.filter((c) => String(c.wilaya_id) === filterWilayaId);
    }
    return communesData;
  }, [communesData, isSuperAdmin, isAdminWilaya, isAdminCommun, user?.commune_id, user?.wilaya_id, filterWilayaId]);

  const citizensQueryParams = useMemo(() => {
    const params: Record<string, unknown> = { limit: 5000, sortBy: "full_name", sortOrder: "asc" };
    if (isSuperAdmin) {
      if (filterWilayaId) params.wilaya = filterWilayaId;
      if (filterCommune) params.commune = filterCommune;
    }
    if (isAdminWilaya && filterCommune) {
      params.commune = filterCommune;
    }
    if (search.trim()) params.search = search.trim();
    return params;
  }, [isSuperAdmin, isAdminWilaya, filterWilayaId, filterCommune, search]);

  const { data: citizensRaw, isLoading, error } = useQuery<Record<string, unknown>[]>(
    isAdminCommun || isSuperAdmin || isAdminWilaya ? "/citizens" : null,
    citizensQueryParams,
    [user?.role, filterWilayaId, filterCommune, search]
  );

  const citizens = useMemo(
    () => (citizensRaw || []).map((c) => mapCitizen(c, language)),
    [citizensRaw, language]
  );

  const scopeLabel = useMemo(() => {
    if (isAdminCommun && user?.commune_id) {
      const c = communesData.find((x) => String(x._id || x.id) === String(user.commune_id));
      return c?.name_fr || c?.name || c?.name_ar || null;
    }
    if ((isAdminWilaya || isAdminCommun) && user?.wilaya_id) {
      const w = scopedWilayas[0];
      return w?.name_fr || w?.name || w?.name_ar || null;
    }
    return null;
  }, [isAdminCommun, isAdminWilaya, user?.commune_id, user?.wilaya_id, communesData, scopedWilayas]);

  const selectedWilayaName = useMemo(() => {
    if (!filterWilaya) return null;
    const w = wilayasData.find((x) => String(x._id || x.id) === filterWilaya);
    return w?.name_fr || w?.name || w?.name_ar || null;
  }, [filterWilaya, wilayasData]);

  const selectedCommuneName = useMemo(() => {
    if (!filterCommune) return null;
    const c = scopedCommunes.find((x) => String(x._id || x.id) === filterCommune);
    return c?.name_fr || c?.name || c?.name_ar || null;
  }, [filterCommune, scopedCommunes]);

  const showFilters = isSuperAdmin || isAdminWilaya;
  const hasActiveFilters = Boolean(filterWilaya || filterCommune || search.trim());

  const resetFilters = () => {
    setFilterWilaya("");
    setFilterCommune("");
    setSearch("");
  };

  return (
    <div className="w-full min-w-0 space-y-8 pb-20">
      {/* Title + total */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full min-w-0 flex-1 space-y-2"
        >
          <motion.div className="flex w-fit items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1">
            <UsersRound size={12} className="text-indigo-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
              {language === "ar" ? "\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u0645\u062f\u0646\u064a" : "Registre citoyen"}
            </span>
          </motion.div>
          <h1 className="w-full text-3xl font-black text-zinc-900 dark:text-white font-plus-jakarta md:text-4xl">
            {t("nav.citizens")}
          </h1>
          <p className="w-full text-sm font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
            {language === "ar"
              ? "\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0648\u0627\u0637\u0646\u064a\u0646 \u0627\u0644\u0645\u0633\u062c\u0644\u064a\u0646 \u062d\u0633\u0628 \u0646\u0637\u0627\u0642 \u0635\u0644\u0627\u062d\u064a\u0627\u062a\u0643."
              : "Consultation des citoyens enregistr\u00e9s, selon votre p\u00e9rim\u00e8tre et vos filtres."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass flex shrink-0 items-center gap-3 rounded-2xl border border-white/5 px-5 py-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
            <ShieldCheck size={22} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              {language === "ar" ? "\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a" : "Total"}
            </p>
            <p className="text-2xl font-black tabular-nums text-zinc-900 dark:text-white">
              {isLoading ? "\u2026" : citizens.length}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Custom filters — directly under title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="glass overflow-hidden rounded-[28px] border border-white/5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 px-5 py-4 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
              <Filter size={18} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                {language === "ar" ? "\u062a\u0635\u0641\u064a\u0629 \u0648\u0628\u062d\u062b" : "Filtres & recherche"}
              </p>
              <p className="text-xs font-medium text-zinc-400">
                {language === "ar"
                  ? "\u0627\u062e\u062a\u0631 \u0627\u0644\u0648\u0644\u0627\u064a\u0629 \u0648\u0627\u0644\u0628\u0644\u062f\u064a\u0629 \u0623\u0648 \u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0627\u0633\u0645 \u0623\u0648 NIN"
                  : "Wilaya, commune ou recherche par nom / NIN"}
              </p>
            </div>
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-[10px] font-black uppercase tracking-widest text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10"
            >
              <RotateCcw size={14} />
              {language === "ar" ? "\u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646" : "R\u00e9initialiser"}
            </button>
          )}
        </div>

        <div className="space-y-5 p-5">
          {scopeLabel && (
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-indigo-500/15 bg-indigo-500/5 px-4 py-3">
              <MapPin size={16} className="shrink-0 text-indigo-500" />
              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  {isAdminCommun
                    ? language === "ar"
                      ? "\u0646\u0637\u0627\u0642 \u0627\u0644\u0628\u0644\u062f\u064a\u0629"
                      : "P\u00e9rim\u00e8tre communal"
                    : language === "ar"
                      ? "\u0646\u0637\u0627\u0642 \u0627\u0644\u0648\u0644\u0627\u064a\u0629"
                      : "P\u00e9rim\u00e8tre wilaya"}
                </p>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">{scopeLabel}</p>
              </div>
              {isAdminWilaya && !isAdminCommun && (
                <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-300">
                  {language === "ar" ? "\u0648\u0644\u0627\u064a\u062a\u0643" : "Votre wilaya"}
                </span>
              )}
            </div>
          )}

          <div
            className={cn(
              "grid gap-4",
              showFilters
                ? isSuperAdmin
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1"
            )}
          >
            {isSuperAdmin && (
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  <MapPin size={12} className="text-indigo-500" />
                  {language === "ar" ? "\u0627\u0644\u0648\u0644\u0627\u064a\u0629" : "Wilaya"}
                </label>
                <select
                  className={selectClass}
                  value={filterWilaya}
                  onChange={(e) => {
                    setFilterWilaya(e.target.value);
                    setFilterCommune("");
                  }}
                >
                  <option value="">
                    {language === "ar" ? "\u0643\u0644 \u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a" : "Toutes les wilayas"}
                  </option>
                  {wilayasData.map((w) => (
                    <option key={w._id || w.id} value={String(w._id || w.id)}>
                      {w.name_fr || w.name || w.name_ar}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {(isSuperAdmin || isAdminWilaya) && (
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                  <Building2 size={12} className="text-indigo-500" />
                  {language === "ar" ? "\u0627\u0644\u0628\u0644\u062f\u064a\u0629" : "Commune"}
                </label>
                <select
                  className={selectClass}
                  value={filterCommune}
                  disabled={isSuperAdmin && !filterWilayaId}
                  onChange={(e) => setFilterCommune(e.target.value)}
                >
                  <option value="">
                    {isAdminWilaya
                      ? language === "ar"
                        ? "\u0643\u0644 \u0628\u0644\u062f\u064a\u0627\u062a \u0627\u0644\u0648\u0644\u0627\u064a\u0629"
                        : "Toutes les communes de la wilaya"
                      : language === "ar"
                        ? "\u0643\u0644 \u0627\u0644\u0628\u0644\u062f\u064a\u0627\u062a"
                        : "Toutes les communes"}
                  </option>
                  {scopedCommunes.map((c) => (
                    <option key={c._id || c.id} value={String(c._id || c.id)}>
                      {c.name_fr || c.name || c.name_ar}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className={cn("space-y-2", !showFilters && "md:col-span-1")}>
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <Search size={12} className="text-indigo-500" />
                {language === "ar" ? "\u0628\u062d\u062b" : "Recherche"}
              </label>
              <div className="relative">
                <Search
                  size={16}
                  className={cn(
                    "pointer-events-none absolute top-1/2 -translate-y-1/2 text-zinc-400",
                    dir === "rtl" ? "right-3" : "left-3"
                  )}
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={
                    language === "ar"
                      ? "\u0627\u0633\u0645\u060c NIN\u060c \u0647\u0627\u062a\u0641\u2026"
                      : "Nom, NIN, t\u00e9l\u00e9phone\u2026"
                  }
                  className={cn(
                    selectClass,
                    "h-11",
                    dir === "rtl" ? "pr-10 pl-4" : "pl-10 pr-4"
                  )}
                />
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 border-t border-zinc-100 pt-4 dark:border-white/5">
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                {language === "ar" ? "\u0646\u0634\u0637 \u0641\u0639\u0627\u0644 :" : "Actifs :"}
              </span>
              {search.trim() && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold text-indigo-700 dark:text-indigo-300">
                  {search.trim()}
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="rounded-full p-0.5 hover:bg-indigo-500/20"
                    aria-label="Clear search"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedWilayaName && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[10px] font-bold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                  <MapPin size={11} className="text-indigo-500" />
                  {selectedWilayaName}
                  <button
                    type="button"
                    onClick={() => {
                      setFilterWilaya("");
                      setFilterCommune("");
                    }}
                    className="rounded-full p-0.5 hover:bg-zinc-200 dark:hover:bg-white/10"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedCommuneName && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[10px] font-bold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                  <Building2 size={11} className="text-indigo-500" />
                  {selectedCommuneName}
                  <button
                    type="button"
                    onClick={() => setFilterCommune("")}
                    className="rounded-full p-0.5 hover:bg-zinc-200 dark:hover:bg-white/10"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {error && (
        <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-600">
          {error}
        </p>
      )}

      {isLoading ? (
        <div className="flex min-h-[240px] items-center justify-center rounded-[28px] border border-white/5 bg-white/30 dark:bg-white/[0.02]">
          <motion.div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-500" />
        </div>
      ) : (
        <DataTable
          title={language === "ar" ? "\u0633\u062c\u0644 \u0627\u0644\u0645\u0648\u0627\u0637\u0646\u064a\u0646" : "Registre des citoyens"}
          exportFileName="citoyens"
          columns={[
            {
              header: language === "ar" ? "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644" : "Nom complet",
              accessor: "full_name",
              render: (val) => (
                <span className="font-black text-zinc-900 dark:text-white">{String(val)}</span>
              ),
            },
            {
              header: "NIN",
              accessor: "nin",
              render: (val) => (
                <span className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-400">
                  {String(val)}
                </span>
              ),
            },
            {
              header: language === "ar" ? "\u0627\u0644\u0647\u0627\u062a\u0641" : "T\u00e9l\u00e9phone",
              accessor: "phone",
            },
            {
              header: language === "ar" ? "\u0627\u0644\u0628\u0631\u064a\u062f" : "E-mail",
              accessor: "email",
            },
            {
              header: language === "ar" ? "\u0627\u0644\u0648\u0644\u0627\u064a\u0629" : "Wilaya",
              accessor: "wilaya",
              render: (val) => (
                <span className="text-[11px] font-black uppercase text-zinc-500">{String(val)}</span>
              ),
            },
            {
              header: language === "ar" ? "\u0627\u0644\u0628\u0644\u062f\u064a\u0629" : "Commune",
              accessor: "commune",
            },
            {
              header: language === "ar" ? "\u0623\u0636\u064a\u0641 \u0628\u0648\u0627\u0633\u0637\u0629" : "Ajout\u00e9 par",
              accessor: "added_by",
              render: (val) => (
                <span
                  className={cn(
                    "text-xs font-semibold",
                    val && val !== "\u2014"
                      ? "font-bold text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-400"
                  )}
                >
                  {String(val)}
                </span>
              ),
            },
            {
              header: language === "ar" ? "\u0627\u0644\u062d\u0632\u0628" : "Parti",
              accessor: "party",
              render: (val) => (
                <span
                  className={cn(
                    "rounded-lg px-2 py-1 text-[10px] font-black uppercase",
                    val && val !== "\u2014"
                      ? "bg-emerald-500/10 text-emerald-600"
                      : "bg-zinc-100 text-zinc-500 dark:bg-white/5"
                  )}
                >
                  {String(val)}
                </span>
              ),
            },
          ]}
          data={citizens as unknown as Record<string, unknown>[]}
        />
      )}
    </div>
  );
}
