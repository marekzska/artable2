import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0b1520',
        gold: '#5ecfa0',
        correct: '#2ea87e',
        wrong: '#c95959',
        'text-primary': '#e8f4f0',
        'text-muted': '#4d7a72',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
