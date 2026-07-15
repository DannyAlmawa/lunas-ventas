import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        ivory: "#F8E8D8",
        "soft-cream": "#F7EFE7",
        moon: "#E8D8B8",
        champagne: "#E8C8A8",
        blush: "#F3D8C8",
        sand: "#D8C8A8",
        taupe: "#987858",
        cacao: "#604A35",
        "deep-brown": "#3B2B1D",
        line: "#D8C8A8",
        "white-warm": "#FFF8F0",
      },
      boxShadow: {
        glow: "0 24px 90px rgba(96, 74, 53, 0.12)",
      },
      backgroundImage: {
        "luna-paper":
          "radial-gradient(circle at 20% 10%, rgba(232, 200, 168, .24), transparent 32%), radial-gradient(circle at 85% 18%, rgba(243, 216, 200, .32), transparent 34%), linear-gradient(180deg, #FFF8F0 0%, #F7EFE7 52%, #F8E8D8 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
