import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
