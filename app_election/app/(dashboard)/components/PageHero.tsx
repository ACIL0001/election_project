"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PageHeroProps = {
  dir?: "ltr" | "rtl";
  badge: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

/** Full-width page title block (badge, h1, subtitle, optional footer & actions). */
export default function PageHero({
  dir = "ltr",
  badge,
  title,
  subtitle,
  footer,
  actions,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-between gap-6 lg:flex-row lg:items-start",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full min-w-0 flex-1 space-y-2"
      >
        {badge}
        <h1 className="w-full text-3xl font-black text-zinc-900 dark:text-white font-plus-jakarta md:text-4xl">
          {title}
        </h1>
        {subtitle != null && subtitle !== "" ? (
          <p className="w-full text-sm font-medium leading-relaxed text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </p>
        ) : null}
        {footer ? <div className="w-full pt-0.5">{footer}</div> : null}
      </motion.div>
      {actions ? <div className="w-full shrink-0 lg:w-auto">{actions}</div> : null}
    </div>
  );
}
