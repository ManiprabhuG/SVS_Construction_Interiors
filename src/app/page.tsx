"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Award,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Clock,
  Sparkles,
  MapPin,
  Maximize2,
  Calendar,
  Layers,
  Wrench,
  Paintbrush,
  Zap,
  DraftingCompass,
} from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const stats = [
    { label: t.hero.stats.projects, value: "150+", icon: Building2 },
    { label: t.hero.stats.clients, value: "120+", icon: Users },
    { label: t.hero.stats.years, value: "12+", icon: Award },
    { label: t.hero.stats.workers, value: "80+", icon: HardHat },
  ];

  const whyUsCards = [
    { ...t.whyUs.cards[0], icon: Users, color: "from-blue-500 to-indigo-600" },
    { ...t.whyUs.cards[1], icon: ShieldCheck, color: "from-sky-500 to-blue-600" },
    { ...t.whyUs.cards[2], icon: Award, color: "from-emerald-500 to-teal-600" },
    { ...t.whyUs.cards[3], icon: Clock, color: "from-amber-500 to-orange-600" },
    { ...t.whyUs.cards[4], icon: CheckCircle2, color: "from-purple-500 to-indigo-600" },
    { ...t.whyUs.cards[5], icon: HardHat, color: "from-rose-500 to-red-600" },
  ];

  const servicesList = [
    { title: "Residential House Construction", desc: "Turnkey home building from structural design to handover.", icon: Building2 },
    { title: "Labour Contract Services", desc: "Expert labour teams starting from ₹620/sq.ft with site supervision.", icon: HardHat },
    { title: "Civil Works", desc: "Reinforced concrete, masonry, foundation, and structural reinforcements.", icon: Layers },
    { title: "Tiling & Flooring", desc: "Granite, marble, vitrified tiles, and anti-skid bathroom layings.", icon: Sparkles },
    { title: "Plumbing Services", desc: "Leak-proof concealed piping, sanitary fixtures, and drainage design.", icon: Wrench },
    { title: "Electrical Works", desc: "Concealed wiring, main board setup, and decorative lighting installation.", icon: Zap },
    { title: "Painting Services", desc: "Weatherproof exterior paints and luxury interior wall finishes.", icon: Paintbrush },
    { title: "Fireworks Building Construction", desc: "Specialized safety-compliant industrial sheds and storage units.", icon: ShieldCheck },
    { title: "Building Consultancy", desc: "Structural safety reviews, vastu guidance, and estimation.", icon: DraftingCompass },
    { title: "Project Planning", desc: "Comprehensive 2D/3D blueprints and government approval plans.", icon: Award },
  ];

  const featuredProjects = [
    {
      title: "Modern Luxury Villa",
      location: "Sivakasi",
      category: "Residential",
      status: "Completed",
      area: "3,200 sq.ft",
      completion: "Jan 2026",
      image: "/images/gallery-1.jpg",
    },
    {
      title: "Turnkey Duplex Home",
      location: "Virudhunagar",
      category: "Residential",
      status: "Completed",
      area: "2,400 sq.ft",
      completion: "Nov 2025",
      image: "/images/gallery-2.jpg",
    },
    {
      title: "Contemporary Elevation Residence",
      location: "Madurai",
      category: "Residential",
      status: "Completed",
      area: "2,850 sq.ft",
      completion: "Mar 2026",
      image: "/images/gallery-3.jpg",
    },
    {
      title: "Premium Interior Living",
      location: "Sivakasi",
      category: "Interiors",
      status: "Completed",
      area: "1,800 sq.ft",
      completion: "Dec 2025",
      image: "/images/gallery-4.jpg",
    },
    {
      title: "Structural Civil Works Shed",
      location: "Sivakasi",
      category: "Civil Works",
      status: "Completed",
      area: "5,000 sq.ft",
      completion: "Aug 2025",
      image: "/images/gallery-5.jpg",
    },
  ];

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-32 sm:pb-40 bg-slate-950 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery-1.jpg"
            alt="SVS Construction Project Background"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-sky-950/20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-8 sm:mb-14">
          <div className="lg:col-span-7 space-y-6">
            {/* Price Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 backdrop-blur-md text-xs sm:text-sm font-bold shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
            >
              Building Quality Homes with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
                Trust & Excellence
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 hover:from-sky-400 hover:to-blue-600 text-white font-bold text-base shadow-xl shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/projects"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-base hover:scale-105 active:scale-95 transition-all text-center"
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

            {/* Quick Contact Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex items-center gap-4 text-xs sm:text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Immediate Support: <strong className="text-white">+91 99406 26796</strong></span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="hidden sm:inline">Sivakasi & All Tamil Nadu</span>
            </motion.div>
          </div>

          {/* Hero Card Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 font-black text-lg">
                    ₹
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Contract Offer</p>
                    <p className="text-white font-bold text-sm">Labour Rate Pricing</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  Best Value
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-slate-400 text-xs sm:text-sm">Labour Contract</span>
                  <span className="text-2xl sm:text-3xl font-black text-sky-400">₹620 <span className="text-xs text-slate-400 font-normal">/ sq.ft</span></span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Complete Civil Work Execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Expert On-Site Supervision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Electrical, Plumbing & Masonry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Guaranteed On-Time Project Handover</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-sky-600/30"
              >
                <span>Book Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* STATS COUNTER STRIP */}
        <div className="absolute -bottom-12 left-0 right-0 z-20 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-3 p-2">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="pt-28 pb-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
              SVS Advantage
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.whyUs.title}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.color} text-white flex items-center justify-center mb-6 shadow-md shadow-slate-300 dark:shadow-none group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                Comprehensive Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.servicesOverview.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                {t.servicesOverview.subtitle}
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold hover:gap-3 transition-all text-sm shrink-0"
            >
              <span>{t.servicesOverview.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all duration-300 space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-600/10 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 pt-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SLIDER */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                Our Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                {t.projects.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                {t.projects.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevProject}
                className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all shadow-md"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextProject}
                className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all shadow-md"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Main Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
              <Image
                src={featuredProjects[activeProjectIdx].image}
                alt={featuredProjects[activeProjectIdx].title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                  featuredProjects[activeProjectIdx].status === "Completed"
                    ? "bg-emerald-600 text-white"
                    : "bg-amber-500 text-white"
                }`}>
                  {featuredProjects[activeProjectIdx].status}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  {featuredProjects[activeProjectIdx].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  {featuredProjects[activeProjectIdx].title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-sky-500" />
                    {t.projects.location}
                  </span>
                  <p className="font-bold text-slate-900 dark:text-white mt-1">
                    {featuredProjects[activeProjectIdx].location}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                    <Maximize2 className="w-3.5 h-3.5 text-sky-500" />
                    {t.projects.area}
                  </span>
                  <p className="font-bold text-slate-900 dark:text-white mt-1">
                    {featuredProjects[activeProjectIdx].area}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    {t.projects.completion}
                  </span>
                  <p className="font-bold text-slate-900 dark:text-white mt-1">
                    {featuredProjects[activeProjectIdx].completion}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                    Contract Type
                  </span>
                  <p className="font-bold text-slate-900 dark:text-white mt-1">
                    Turnkey / Labour
                  </p>
                </div>
              </div>

              <Link
                href="/projects"
                className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors shadow-lg shadow-sky-600/20"
              >
                <span>View All Projects Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.testimonials.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.list.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      {item.name}
                    </h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                      {item.location}, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-sky-900 via-blue-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-widest">
            Ready to Build?
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t.ctaSection.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t.ctaSection.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-base shadow-xl shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
            >
              {t.ctaSection.button}
            </Link>

            <a
              href="tel:+919940626796"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base hover:scale-105 active:scale-95 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-sky-400" />
              <span>Call +91 99406 26796</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
