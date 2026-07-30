"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  HardHat,
  Sparkles,
} from "lucide-react";

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  location: string;
  serviceRequired: string;
  message: string;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact Form Submission Data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  return (
    <div className="pt-8 pb-20 bg-slate-50 dark:bg-slate-950">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t.contactPage.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {t.contactPage.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        {/* Main Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white shadow-2xl space-y-8 border border-slate-800">
            <div className="space-y-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                Direct Communication
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                {t.contactPage.infoTitle}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                SVS Constructions & Interiors — Delivering engineering excellence across South Tamil Nadu.
              </p>
            </div>

            <div className="space-y-6 pt-2 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Address</p>
                  <p className="font-bold text-slate-100 mt-0.5">{t.contactPage.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Phone</p>
                  <a href="tel:+919940626796" className="font-bold text-sky-400 hover:underline text-base mt-0.5 block">
                    +91 99406 26796
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Email</p>
                  <a href="mailto:svsconstructionspvtltd007@gmail.com" className="font-bold text-slate-100 hover:text-sky-400 break-all text-xs sm:text-sm mt-0.5 block">
                    svsconstructionspvtltd007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Working Hours</p>
                  <p className="font-bold text-slate-100 mt-0.5">{t.contactPage.hours}</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-950/60 border border-sky-800/60 flex items-center gap-3 text-xs text-sky-300">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Free site visits available in Sivakasi, Virudhunagar, Madurai, & nearby regions.</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {t.contactPage.formTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Fill in your details below and our chief civil engineer will respond within 24 hours.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold flex items-start gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{t.contactPage.successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t.contactPage.fullName} *
                  </label>
                  <input
                    type="text"
                    {...register("fullName", { required: "Full name is required" })}
                    placeholder="e.g. S. Rajkumar"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-600"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-rose-500">{errors.fullName.message}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t.contactPage.phoneNumber} *
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\s-]{10,15}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    placeholder="e.g. 99406 26796"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-600"
                  />
                  {errors.phoneNumber && (
                    <span className="text-xs text-rose-500">{errors.phoneNumber.message}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t.contactPage.emailAddress}
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="e.g. client@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-600"
                  />
                </div>

                {/* Location */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {t.contactPage.location} *
                  </label>
                  <input
                    type="text"
                    {...register("location", { required: "Location is required" })}
                    placeholder="e.g. Sivakasi / Virudhunagar"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-600"
                  />
                  {errors.location && (
                    <span className="text-xs text-rose-500">{errors.location.message}</span>
                  )}
                </div>
              </div>

              {/* Service Required */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t.contactPage.serviceRequired} *
                </label>
                <select
                  {...register("serviceRequired", { required: "Please select a service" })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-600"
                >
                  <option value="">Select Service...</option>
                  <option value="Residential House Construction">Residential House Construction</option>
                  <option value="Labour Contract (₹620/sq.ft)">Labour Contract (₹620/sq.ft)</option>
                  <option value="Civil Works">Civil Works</option>
                  <option value="Tiling Works">Tiling Works</option>
                  <option value="Plumbing Works">Plumbing Works</option>
                  <option value="Electrical Works">Electrical Works</option>
                  <option value="Painting Services">Painting Services</option>
                  <option value="Fireworks Building Construction">Fireworks Building Construction</option>
                  <option value="Building Consultancy">Building Consultancy</option>
                  <option value="Project Planning">Project Planning</option>
                </select>
                {errors.serviceRequired && (
                  <span className="text-xs text-rose-500">{errors.serviceRequired.message}</span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t.contactPage.message}
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  placeholder="Tell us about your plot size, estimated budget, or project timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-sky-600/30 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{t.contactPage.submitBtn}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">
                Service Map
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Sivakasi & Surrounding Coverage Area
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
              Tamil Nadu
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
            <iframe
              title="SVS Constructions Sivakasi Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.539744665471!2d77.79446487502422!3d9.45330349062678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cee4a49a9041%3A0x6b8404a37651a02c!2sSivakasi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
