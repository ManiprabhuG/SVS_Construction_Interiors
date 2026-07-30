"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building2,
  HardHat,
  Layers,
  Sparkles,
  Wrench,
  Zap,
  Paintbrush,
  ShieldCheck,
  DraftingCompass,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function ServicesPage() {
  const { t } = useLanguage();

  const servicesData = [
    {
      id: "residential",
      title: "1. Residential House Construction",
      desc: "Complete end-to-end turnkey construction of independent houses, duplex villas, and multi-story apartments across Tamil Nadu.",
      badge: "Turnkey & Custom Build",
      icon: Building2,
      benefits: [
        "100% custom architectural layout design tailored to family needs",
        "Vastu-compliant floor planning & structural engineering",
        "Premium material sourcing with brand certificates",
        "On-time project completion guarantee with zero cost escalation",
      ],
      process: ["Site Inspection & Vastu Plan", "3D Architectural Design", "Foundation & Civil Frame", "Finishing & Handover"],
    },
    {
      id: "labour",
      title: "2. Labour Contract Services",
      desc: "Economical and skilled labor contract solutions starting from ₹620 per sq.ft. Complete site management provided by qualified civil supervisors.",
      badge: "Starting ₹620 / sq.ft",
      icon: HardHat,
      benefits: [
        "Affordable pricing structure for cost-conscious home builders",
        "Experienced team of brick masons, bar benders, and carpenters",
        "Regular site safety enforcement and daily progress updates",
        "No hidden charges; transparent measurement verification",
      ],
      process: ["Area Measurement & Rate Agreement", "Workforce Deployment", "Stage-wise Execution", "Quality Verification"],
    },
    {
      id: "civil",
      title: "3. Civil Works & Concrete Engineering",
      desc: "Heavy civil engineering works including RCC columns, footings, beam reinforcement, slab casting, retaining walls, and brickwork.",
      badge: "Structural Safety",
      icon: Layers,
      benefits: [
        "High-grade M20/M25 concrete mix design for maximum durability",
        "Precision shuttering and alignment checking using digital levels",
        "Proper steel bar bending and spacing per structural drawings",
        "Controlled curing protocol to achieve full compressive strength",
      ],
      process: ["Soil Testing & Excavation", "Reinforcement Fixing", "Concrete Pouring & Curing", "Masonry Construction"],
    },
    {
      id: "tiling",
      title: "4. Tiling & Flooring Installation",
      desc: "Professional installation of vitrified tiles, marble, granite, wooden flooring, and anti-skid bathroom tiles with seamless grout lines.",
      badge: "Precision Laying",
      icon: Sparkles,
      benefits: [
        "Laser-guided surface levelling before tile placement",
        "Stain-resistant and epoxy grouting for wet areas",
        "Custom granite steps and kitchen countertop fabrication",
        "Durable, slip-resistant flooring options",
      ],
      process: ["Base Screed Preparation", "Tile Pattern Marking", "Adhesive & Mortar Laying", "Epoxy Grouting & Polish"],
    },
    {
      id: "plumbing",
      title: "5. Plumbing & Drainage Solutions",
      desc: "Leak-proof concealed CPVC/UPVC piping networks, overhead tank installation, underground sump construction, and sanitary fixture fittings.",
      badge: "Zero-Leak Guarantee",
      icon: Wrench,
      benefits: [
        "Pressure-tested concealed water supply lines",
        "Heavy-duty PVC drainage & sewage slope alignment",
        "Installation of modern wall-hung closets & CP fittings",
        "Rainwater harvesting & sump integration",
      ],
      process: ["Piping Route Layout", "Wall Chasing & Pipe Fixing", "Hydrostatic Pressure Testing", "Fixture Installation"],
    },
    {
      id: "electrical",
      title: "6. Electrical Works & Wiring",
      desc: "Fire-retardant concealed copper wiring, main distribution board (DB) installation, MCB/ELCB setup, phase balancing, and inverter wiring.",
      badge: "IS Certified Safety",
      icon: Zap,
      benefits: [
        "FRLS (Fire Retardant Low Smoke) copper wire usage",
        "Modular switch boxes and smart home conduit preparation",
        "Proper earthing pit installation to prevent electrical shocks",
        "Phase balancing to reduce energy bills",
      ],
      process: ["Conduit Chasing & Box Fixing", "Wire Pulling & Color Coding", "DB Dressing & Breakers", "Testing & Commissioning"],
    },
    {
      id: "painting",
      title: "7. Painting & Interior Finishes",
      desc: "Interior putty smoothing, primer coating, royal luxury emulsions, weatherproof exterior coatings, and texture wall designs.",
      badge: "Premium Wall Decor",
      icon: Paintbrush,
      benefits: [
        "Wall sanding and 2-coat acrylic wall putty prep",
        "Anti-fungal & weather-resistant exterior paint applications",
        "Custom accent wall textures and wood/metal enameling",
        "Long-lasting color retention guarantee",
      ],
      process: ["Surface Cleaning & Primer", "Double Coat Wall Putty", "Sanding & Undercoat", "Final Emulsion Spray/Roll"],
    },
    {
      id: "fireworks",
      title: "8. Fireworks Building Construction",
      desc: "Specialized explosive-resistant and fire-safe industrial sheds designed specifically for Sivakasi’s pyrotechnics & match industry rules.",
      badge: "Sivakasi Specialization",
      icon: ShieldCheck,
      benefits: [
        "Strict adherence to PESO and local industrial safety codes",
        "Blast-deflection wall designs & non-sparking flooring",
        "Emergency exit layout planning and ventilation design",
        "Structural audit documentation support",
      ],
      process: ["Regulatory Layout Review", "Heavy Civil Foundation", "PESO Safety Structural Framing", "Handover Audit"],
    },
    {
      id: "consultancy",
      title: "9. Building Consultancy & Cost Estimation",
      desc: "Professional structural evaluation, material quantity takeoff, cost optimization, and Vastu compliance consultations.",
      badge: "Expert Advice",
      icon: DraftingCompass,
      benefits: [
        "Accurate bill of quantities (BOQ) to prevent budget overruns",
        "Structural health assessment for old buildings",
        "Vastu correction without major structural damage",
        "Second-opinion structural auditing",
      ],
      process: ["Requirement Analysis", "Site Measurement", "BOQ & Estimation Draft", "Consultation Report"],
    },
    {
      id: "planning",
      title: "10. Project Planning & Government Approvals",
      desc: "Creation of 2D floor plans, 3D elevation renderings, structural blueprints, and assistance with DTCP/Panchayat approval documentation.",
      badge: "Approval Ready",
      icon: FileCheck,
      benefits: [
        "Photorealistic 3D exterior & interior renderings",
        "Compliant blueprint creation for bank loan sanctioning",
        "Panchayat and municipal plan approval guidance",
        "Detailed milestone Gantt chart scheduling",
      ],
      process: ["Conceptual Sketching", "3D Modeling & Render", "Structural Drawings", "Approval Documenting"],
    },
  ];

  return (
    <div className="pt-8 pb-20 bg-slate-50 dark:bg-slate-950">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
            SVS Service Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.servicesPage.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {t.servicesPage.subtitle}
          </p>
        </div>
      </div>

      {/* Main Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 scroll-mt-24"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-sky-600/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <span className="px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold shrink-0 self-start sm:self-auto border border-sky-200 dark:border-sky-800">
                  {service.badge}
                </span>
              </div>

              {/* Benefits Grid */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                  Key Service Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Process */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                  Execution Process
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-sky-900/5 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center space-y-1"
                    >
                      <span className="text-xs font-bold text-sky-600 dark:text-sky-400">Step 0{idx + 1}</span>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Service Available across Sivakasi, Virudhunagar, Madurai, & Tamil Nadu
                </span>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-600/20"
                >
                  <span>Inquire About This Service</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
