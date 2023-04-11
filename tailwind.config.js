/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.svg')",
      },
      fontFamily: {
        outfit: "var(--outfit)",
        "send-flowers": "var(--send-flowers)",
      },
      keyframes: {
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "40% 60% 65% 35% / 40% 55% 45% 60%" },
          "50%": { borderRadius: "65% 35% 60% 40% / 55% 75% 25% 45%" },
          "75%": { borderRadius: "30% 70% 50% 50% / 45% 65% 35% 55%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        "text-shine": {
          "0%": {
            backgroundPosition: "400%",
            backgroundSize: "200%",
          },
          // "10%": {
          //   backgroundPosition: "left",
          // },
          // "90%": {
          //   backgroundPosition: "right",
          // },
          "100%": {
            backgroundPosition: "-400%",
            backgroundSize: "200%",
          },
        },
      },
      animation: {
        morph: "morph 10s ease-in-out infinite",
        "text-shine": "text-shine 25s linear infinite",
      },
    },
  },
  plugins: [],
};

