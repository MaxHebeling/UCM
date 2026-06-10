import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Extraídos del logo UCM Centro de Posgrado
        ucm: {
          blue: "#0C78B4",   // azul águila + UCM
          blueDk: "#0A6299",
          navy: "#002460",   // script "Centro de Posgrado"
          navyDk: "#001638",
          sky: "#60B4D8",    // slash de la M
          skyLt: "#A9D6EC",
          ice: "#EAF4FB",
        },
        gold: "#D4AF37",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(0,36,96,0.18)",
        glow: "0 0 60px -10px rgba(12,120,180,0.45)",
      },
      backgroundImage: {
        "ucm-gradient": "linear-gradient(135deg,#002460 0%,#0C78B4 55%,#60B4D8 100%)",
        "ucm-radial": "radial-gradient(1200px 600px at 80% -10%,rgba(96,180,216,0.25),transparent)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
