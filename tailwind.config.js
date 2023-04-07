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
    },
  },
  plugins: [],
};

