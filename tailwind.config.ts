import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardColor: "var(--card-color)",
      },
      fontFamily: {
        playwrite: ['"Playwrite CO Guides"', "sans-serif"],
        merienda: ["var(--font-merienda)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
