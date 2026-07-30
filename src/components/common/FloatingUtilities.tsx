"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Globe, ChevronUp, ChevronDown } from "lucide-react";

export const FloatingUtilities: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Expanded control panel */}
      {isOpen && (
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-2xl flex flex-col gap-3 min-w-[180px] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              {t.utilities.lang}
            </span>
            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 text-xs font-medium">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === "en"
                    ? "bg-sky-600 text-white shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ta")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  language === "ta"
                    ? "bg-sky-600 text-white shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                தமிழ்
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              {theme === "light" ? (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-sky-400" />
              )}
              {t.utilities.theme}
            </span>
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  theme === "dark" ? "translate-x-6 bg-sky-400" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      )}

      {/* Trigger floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-800 text-white shadow-lg hover:shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
        aria-label="Floating options menu"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-wider">
          {language === "en" ? "EN" : "தமிழ்"} | {theme === "light" ? "Light" : "Dark"}
        </span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
