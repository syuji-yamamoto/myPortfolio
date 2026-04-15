import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf8f5",
        charcoal: "#2c2c2c",
        brown: {
          DEFAULT: "#4a3728",
          light: "#8b7355",
        },
        warm: {
          border: "#d4c5b2",
          muted: "#a89885",
        },
      },
    },
  },
  plugins: [],
};
export default config;
