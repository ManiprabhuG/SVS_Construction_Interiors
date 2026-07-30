"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Maximize2,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const projectsData = [
    {
      id: 1,
      title: "Luxury Duplex Residence",
      location: "Sivakasi",
      category: "Residential",
      status: "Completed",
      area: "3,200 sq.ft",
      completion: "Jan 2026",
      image: "/images/gallery-1.jpg",
      desc: "Turnkey residential project featuring RCC roof framing, granite flooring, and luxury interior woodwork.",
    },
    {
      id: 2,
      title: "Contemporary Villa Elevation",
      location: "Virudhunagar",
      category: "Residential",
      status: "Completed",
      area: "2,600 sq.ft",
      completion: "Nov 2025",
      image: "/images/gallery-2.jpg",
      desc: "Modern two-story independent house with custom exterior weather-shield paint and glass balconies.",
    },
    {
      id: 3,
      title: "Contemporary House Construction",
      location: "Madurai",
      category: "Residential",
      status: "Completed",
      area: "2,850 sq.ft",
      completion: "Mar 2026",
      image: "/images/gallery-3.jpg",
      desc: "Completed residential civil work project featuring reinforced foundation footings and column structure.",
    },
    {
      id: 4,
      title: "Custom Interior Living Space",
      location: "Sivakasi",
      category: "Interiors",
      status: "Completed",
      area: "1,800 sq.ft",
      completion: "Dec 2025",
      image: "/images/gallery-4.jpg",
      desc: "Full interior design including modular kitchen, TV unit paneling, false ceiling, and cove lighting.",
    },
    {
      id: 5,
      title: "Industrial Fireworks Storage Shed",
      location: "Sivakasi",
      category: "Civil Works",
      status: "Completed",
      area: "5,000 sq.ft",
      completion: "Aug 2025",
      image: "/images/gallery-5.jpg",
      desc: "PESO-compliant reinforced civil structure built specifically for fireworks storage safety.",
    },
    {
      id: 6,
      title: "Independent Single Villa",
      location: "Coimbatore",
      category: "Residential",
      status: "Completed",
      area: "2,100 sq.ft",
      completion: "Jul 2025",
      image: "/images/gallery-6.jpg",
      desc: "Affordable house construction delivered under labour contract at ₹620/sq.ft.",
    },
    {
      id: 7,
      title: "Reinforced Civil Masonry Project",
      location: "Virudhunagar",
      category: "Civil Works",
      status: "Completed",
      area: "3,500 sq.ft",
      completion: "Feb 2026",
      image: "/images/gallery-7.jpg",
      desc: "Multi-level civil framework with high-grade M25 concrete casting.",
    },
    {
      id: 8,
      title: "Modern Architectural Masterpiece",
      location: "Sivakasi",
      category: "Completed",
      status: "Completed",
      area: "4,000 sq.ft",
      completion: "Feb 2026",
      image: "/images/gallery-8.jpg",
      desc: "Grand residential build showcasing SVS Constructions' premium civil engineering mastery.",
    },
  ];

  const filterTabs = [
    { label: t.projects.all, value: "All" },
    { label: t.projects.residential, value: "Residential" },
    { label: t.projects.ongoing, value: "Ongoing" },
    { label: t.projects.completed, value: "Completed" },
    { label: t.projects.civil, value: "Civil Works" },
    { label: t.projects.interiors, value: "Interiors" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Residential") return p.category === "Residential";
    if (activeFilter === "Ongoing") return p.status === "Ongoing";
    if (activeFilter === "Completed") return p.status === "Completed";
    if (activeFilter === "Civil Works") return p.category === "Civil Works";
    if (activeFilter === "Interiors") return p.category === "Interiors";
    return true;
  });

  return (
    <div className="pt-8 pb-20 bg-slate-50 dark:bg-slate-950">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
            Showcase Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.projects.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === tab.value
                  ? "bg-sky-600 text-white shadow-lg shadow-sky-600/30 scale-105"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-sky-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setLightboxIdx(idx)}
              className="group cursor-pointer rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with zoom effect */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white font-bold text-xs shadow-xl backdrop-blur-md">
                    {t.projects.viewDetails}
                  </span>
                </div>

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 ${
                      project.status === "Completed"
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-500 text-white"
                    }`}
                  >
                    {project.status === "Completed" ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-extrabold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 line-clamp-2">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-sky-500" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                    <Maximize2 className="w-3.5 h-3.5 text-sky-500" />
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX PREVIEW MODAL */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="relative h-72 sm:h-96 md:h-[480px] md:w-3/5 bg-black">
              <Image
                src={filteredProjects[lightboxIdx].image}
                alt={filteredProjects[lightboxIdx].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 md:w-2/5 text-white flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold border border-sky-400/30">
                  {filteredProjects[lightboxIdx].category}
                </span>

                <h2 className="text-2xl font-bold">
                  {filteredProjects[lightboxIdx].title}
                </h2>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {filteredProjects[lightboxIdx].desc}
                </p>

                <div className="space-y-2 text-xs pt-4 border-t border-slate-800">
                  <p><strong className="text-slate-400">Location:</strong> {filteredProjects[lightboxIdx].location}</p>
                  <p><strong className="text-slate-400">Status:</strong> {filteredProjects[lightboxIdx].status}</p>
                  <p><strong className="text-slate-400">Area:</strong> {filteredProjects[lightboxIdx].area}</p>
                  <p><strong className="text-slate-400">Completion:</strong> {filteredProjects[lightboxIdx].completion}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <button
                  onClick={() =>
                    setLightboxIdx(
                      (lightboxIdx - 1 + filteredProjects.length) % filteredProjects.length
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prev
                </button>

                <span className="text-xs text-slate-400">
                  {lightboxIdx + 1} / {filteredProjects.length}
                </span>

                <button
                  onClick={() =>
                    setLightboxIdx((lightboxIdx + 1) % filteredProjects.length)
                  }
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
