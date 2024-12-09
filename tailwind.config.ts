import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tosca-green": "#4FB3B3", // Hijau Tosca dari background gunung
        "sakura-pink": "#F8BBD0", // Pink Sakura dari bunga
        "mountain-dark": "#2A4A4A", // Hijau gelap dari gunung
        "text-black": "#000000", // Hitam untuk heading
        "white": "#FFFFFF", // Putih untuk teks
      },
    },
  },
  plugins: [],
} satisfies Config;
