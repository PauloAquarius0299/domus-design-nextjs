import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#2565ae',
        customBlack: '#333333',
        customGray: "#666666",
        error: "#e97171",
        success: '#2ec1ac',
        textGray: "#9F9F9F"
      },
      backgroundImage: {
        'hero': 'url(/images/hero.jpg)',
        "shop-hero": "url(/images/shop_hero.png)",
      },
      fontSize: {
        'normal': '16px',
        'header': '40px',
        'large': '52px',
        '20': '20px',
        '24': '24px',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up':{
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
export default config;