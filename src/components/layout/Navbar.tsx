"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, PhoneCall, ChevronRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3 border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 overflow-hidden rounded-xl bg-white p-1 shadow-md group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.jpg"
              alt="SVS Constructions & Interiors Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-black text-lg sm:text-xl tracking-tight leading-tight transition-colors ${
                scrolled
                  ? "text-slate-900 dark:text-white"
                  : "text-white drop-shadow-md"
              }`}
            >
              SVS <span className="text-sky-500">CONSTRUCTIONS</span>
            </span>
            <span
              className={`text-[10px] sm:text-xs font-semibold tracking-widest uppercase ${
                scrolled
                  ? "text-sky-600 dark:text-sky-400"
                  : "text-sky-300 drop-shadow"
              }`}
            >
              & Interiors • Sivakasi
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? scrolled
                      ? "bg-sky-600/10 text-sky-600 dark:text-sky-400 font-semibold"
                      : "bg-white/20 text-white font-semibold backdrop-blur-sm"
                    : scrolled
                    ? "text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    : "text-slate-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919940626796"
            className={`flex items-center gap-2 text-xs font-bold transition-colors ${
              scrolled
                ? "text-slate-700 dark:text-slate-300 hover:text-sky-600"
                : "text-white hover:text-sky-300"
            }`}
          >
            <PhoneCall className="w-4 h-4 text-sky-500 animate-pulse" />
            <span>99406 26796</span>
          </a>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md shadow-sky-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1"
          >
            <span>{t.nav.getQuote}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            scrolled
              ? "text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "bg-sky-600 text-white font-semibold shadow-md shadow-sky-600/20"
                      : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href="tel:+919940626796"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm"
            >
              <PhoneCall className="w-4 h-4 text-sky-600" />
              <span>Call: +91 99406 26796</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-sky-600 text-white font-bold text-sm shadow-lg shadow-sky-600/30"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
