import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0284C7",
          sky: "#38BDF8",
          navy: "#1E3A8A",
          darkNavy: "#0B132B",
          cyan: "#06B6D4",
          lightBg: "#F8FAFC",
          darkBg: "#0F172A",
          darkCard: "#1E293B",
          gold: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
