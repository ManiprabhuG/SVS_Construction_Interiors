import React from "react";

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white">Terms & Conditions</h1>
      <p className="text-sm text-slate-600 dark:text-slate-400">Last updated: July 2026</p>

      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Welcome to the official website of <strong>SVS Constructions & Interiors</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">1. Quotation & Estimations</h2>
        <p>
          All price estimates (including the ₹620/sq.ft starting labour contract rate) displayed on this website are indicative and subject to final soil inspection, structural plan verification, and mutually signed agreement.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">2. Intellectual Property</h2>
        <p>
          All logos, project showcase images, text, and architectural content displayed on this website are owned by or licensed to SVS Constructions & Interiors.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">3. Governing Law</h2>
        <p>
          These terms are governed by the laws of Tamil Nadu, India. Any legal proceedings shall be subject to the jurisdiction of the courts in Virudhunagar district.
        </p>
      </div>
    </div>
  );
}
