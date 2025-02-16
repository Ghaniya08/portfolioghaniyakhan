import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
		themes: [""],}
		,
    darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#130428",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [ require('daisyui')],
};
export default config;

 