"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building2,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Award,
  Users,
} from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const goalsTimeline = [
    {
      step: "01",
      title: "Skilled Execution",
      desc: "Employing licensed civil engineers, certified site supervisors, and trained craftsmen for every concrete pour and structural element.",
    },
    {
      step: "02",
      title: "Affordable Pricing",
      desc: "Providing transparent labor contract structures starting at ₹620/sq.ft to eliminate cost overruns for home builders.",
    },
    {
      step: "03",
      title: "Quality Control",
      desc: "Implementing multi-stage quality checks for concrete strength, steel grade, plastering finish, and waterproofing.",
    },
    {
      step: "04",
      title: "Safety Compliance",
      desc: "Strictly adhering to industrial and residential structural safety norms, fire safety for special buildings, and worker protection.",
    },
    {
      step: "05",
      title: "Customer Satisfaction",
      desc: "Maintaining constant communication through weekly progress reports, site visit walkthroughs, and clear milestone schedules.",
    },
    {
      step: "06",
      title: "Long-term Relationships",
      desc: "Offering post-handover warranty support, maintenance guidance, and lifelong structural consultation for every client.",
    },
  ];

  return (
    <div className="pt-8 pb-20 bg-slate-50 dark:bg-slate-950">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
            {t.aboutPage.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.aboutPage.introTitle}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Sivakasi • Virudhunagar • Madurai • Coimbatore • All Tamil Nadu
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Intro & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <Image
              src="/images/gallery-2.jpg"
              alt="SVS Constructions Company Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20">
              <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                Headquarters
              </p>
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                Sivakasi, Virudhunagar District, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.aboutPage.storyTitle}
              </h2>
            </div>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.introBody}
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {t.aboutPage.storyBody}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-2xl font-black text-sky-600 dark:text-sky-400">12+ Years</span>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">Industry Mastery</p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-2xl font-black text-sky-600 dark:text-sky-400">150+ Homes</span>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">Handed Over</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-600/30">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.aboutPage.missionTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.missionBody}
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-700/30">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.aboutPage.visionTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.aboutPage.visionBody}
            </p>
          </div>
        </div>

        {/* GOALS TIMELINE LAYOUT */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.aboutPage.goalsTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Our structured approach ensures every house construction achieves structural longevity.
            </p>
          </div>

          <div className="relative border-l-2 border-sky-500/40 ml-4 md:ml-32 space-y-10">
            {goalsTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Timeline node badge */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center shadow-md ring-4 ring-slate-50 dark:ring-slate-950">
                  {item.step}
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-sky-600 text-white text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black">
            Looking for a Trusted Building Contractor in Sivakasi?
          </h2>
          <p className="text-sky-100 text-sm sm:text-base max-w-2xl mx-auto">
            Get labor contract estimates starting from ₹620 per sq.ft with zero hidden charges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-sky-700 hover:bg-sky-50 font-bold text-sm shadow-lg transition-transform hover:scale-105"
          >
            <span>Consult Our Engineers Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
