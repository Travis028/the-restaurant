/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#006B3F',
          light: '#007A47',
          pale: '#e8f4ee'
        },
        gold: {
          DEFAULT: '#C9A84C',
          dark: '#8a6c1a',
          pale: '#fdf6e3'
        },
        navy: {
          DEFAULT: '#1A1A2E',
          mid: '#252540',
          light: '#eeeef6'
        },
        teal: { DEFAULT: '#17A589' },
        red: { DEFAULT: '#C0392B' },
        offwhite: '#F8F7F4',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'gold': '0 0 15px rgba(201,168,76,0.3)',
        'green': '0 0 15px rgba(0,107,63,0.3)',
      }
    },
  },
  plugins: [],
}
