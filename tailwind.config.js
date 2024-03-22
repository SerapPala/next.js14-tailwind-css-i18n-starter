/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true
    },
    extend: {  fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],

      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        Popup: "2px 2px 20px rgba(0, 0, 0, 0.08), -1px -1px 20px rgba(0, 0, 0, 0.06)",
        Modal: "0px 0px 12px rgba(0, 0, 0, 0.08)",
        Table: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        Button: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        ButtonHover: "0px 0px 3px 1px rgba(16, 24, 40, 0.05)"
      },
      colors: {
        'white': {
          DEFAULT: 'white',
          "25":"rgba(255, 255, 255, 0.025)",
          "50":"rgba(255, 255, 255, 0.05)",
          "100":"rgba(255, 255, 255, 0.1)",
          "200":"rgba(255, 255, 255, 0.2)",
          "300":"rgba(255, 255, 255, 0.3)",
          "400":"rgba(255, 255, 255, 0.4)",
          "500":"rgba(255, 255, 255, 0.5)",
          "600":"rgba(255, 255, 255, 0.6)",
          "700":"rgba(255, 255, 255, 0.7)",
          "800":"rgba(255, 255, 255, 0.8)",
          "900":"rgba(255, 255, 255, 0.9)",
          "950":"rgba(255, 255, 255, 0.95)",
        },
        'slate': {
          DEFAULT: '',
          "25":"#FBFCFD",
          "50":"#f8fafc",
          "100":"#f1f5f9",
          "200":"#e2e8f0",
          "300":"#cbd5e1",
          "400":"#94a3b8",
          "500":"#64748b",
          "600":"#475569",
          "700":"#334155",
          "800":"#1e293b",
          "900":"#0f172a",
          "950":"#020617",
        },   'zinc': {
          DEFAULT: '',
          "50":"#fafafa",
          "100":"#f4f4f5",
          "200":"#e4e4e7",
          "300":"#d4d4d8",
          "400":"#a1a1aa",
          "500":"#71717a",
          "600":"#52525b",
          "700":"#3f3f46",
          "800":"#27272a",
          "900":"#18181b",
          "950":"#09090b",
        },
        'green': {
          DEFAULT: '',
          "50":"#f9fce9",
          "100":"#f1f8cf",
          "200":"#e2f1a5",
          "300":"#cce670",
          "400":"#b4d744",
          "500":"#87a922",
          "600":"#75961a",
          "700":"#597318",
          "800":"#475b19",
          "900":"#3e4e19",
          "950":"#1f2a09",
        },
        'blue': {
          DEFAULT: '',
          "25":"#eff7ff",
          "100":"#daecff",
          "200":"#cce5ff",
          "300":"#91caff",
          "400":"#5eacfc",
          "500":"#388af9",
          "600":"#226bee",
          "700":"#1a56db",
          "800":"#1c46b1",
          "900":"#1c3e8c",
          "950":"#162755",
        },
        'dark': {
          DEFAULT: '',
          "950":"#1a1a1a",
        },
      },
      spacing: {
        '18': '4.5rem',
      },
      letterSpacing: {
        '08': '0.8px',
      },
      // boxShadow: {
      //   "grey-025":"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      //   '3xl': '0 2px 12px 0 rgba(0, 0, 0, 0.08)',
      // },
      dropShadow: {
        'card-drop-shadow': '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontWeight: {
        "extraLightDesktop":"275",
      },
      fontSize: {
        "28":"28px",
        "42":"42px",
        "66":"66px",
        "xxs":"10px",
      },
      lineHeight: {
        "12":"48px",
        "22":"88px",
        "20":"",
        "42":"42px",
        "40":"40px"
      }}
  },
  variants: {
  },
  plugins: [],
}

