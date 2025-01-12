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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'brand-primary': "var(--brand-primary)",
        'brand-fill': "var(--brand-fill)",
        'brand-stroke-weak': "var(--brand-stroke-weak)",
        'brand-black': "var(--brand-black)"
      },
    },
  },
  plugins: [],
};
export default config;
