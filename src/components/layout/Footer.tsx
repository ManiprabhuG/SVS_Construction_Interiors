"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const servicesList = [
    { label: "Residential House Construction", href: "/services#residential" },
    { label: "Labour Contract Services", href: "/services#labour" },
    { label: "Civil Works", href: "/services#civil" },
    { label: "Tiling & Flooring", href: "/services#tiling" },
    { label: "Plumbing Services", href: "/services#plumbing" },
    { label: "Electrical Works", href: "/services#electrical" },
    { label: "Painting Services", href: "/services#painting" },
    { label: "Fireworks Building Construction", href: "/services#fireworks" },
    { label: "Building Consultancy", href: "/services#consultancy" },
    { label: "Project Planning", href: "/services#planning" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white p-1">
                <Image
                  src="/images/logo.jpg"
                  alt="SVS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight">
                  SVS <span className="text-sky-500">CONSTRUCTIONS</span>
                </span>
                <span className="text-xs text-sky-400 font-semibold tracking-wider uppercase">
                  & Interiors • Sivakasi
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-950/80 border border-sky-800/50 text-sky-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Labour Contract from ₹620/sq.ft</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide uppercase border-l-4 border-sky-500 pl-3">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide uppercase border-l-4 border-sky-500 pl-3">
              {t.footer.ourServices}
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {servicesList.slice(0, 6).map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide uppercase border-l-4 border-sky-500 pl-3">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{t.contactPage.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+919940626796" className="hover:text-sky-400 transition-colors font-semibold">
                  +91 99406 26796
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:svsconstructionspvtltd007@gmail.com" className="hover:text-sky-400 transition-colors break-all">
                  svsconstructionspvtltd007@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{t.contactPage.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SVS Constructions & Interiors. {t.footer.rights}</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-sky-400 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-sky-400 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
