import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white">Privacy Policy</h1>
      <p className="text-sm text-slate-600 dark:text-slate-400">Last updated: July 2026</p>

      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          At <strong>SVS Constructions & Interiors</strong> (Sivakasi, Tamil Nadu), we respect your privacy and are committed to protecting any personal information you provide when visiting our website or submitting inquiries.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">1. Information We Collect</h2>
        <p>
          When you fill out our contact or consultation forms, we collect your name, phone number, email address, project location, and requested services to fulfill your inquiry.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">2. How We Use Your Information</h2>
        <p>
          Your information is strictly used for site visit scheduling, architectural estimations, civil contract discussions, and project updates. We never sell or share your information with third-party advertisers.
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">3. Local Storage & Preferences</h2>
        <p>
          Our website uses browser LocalStorage to remember your preferred language (English or Tamil) and display theme (Light or Dark Mode).
        </p>

        <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">4. Contact Information</h2>
        <p>
          If you have questions regarding this privacy policy, please contact us at:
          <br />
          <strong>Email:</strong> svsconstructionspvtltd007@gmail.com
          <br />
          <strong>Phone:</strong> +91 99406 26796
        </p>
      </div>
    </div>
  );
}
