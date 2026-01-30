/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        ivory: {
          50: '#FAF9F6',
          100: '#F5F5F0',
        },
        gold: {
          50: '#FCF9F0',
          100: '#F8F1E1',
          200: '#EFDFBC',
          300: '#E1C88D',
          400: '#D2AD5E',
          500: '#C1923D',
          600: '#A3772C',
        },
        emerald: {
          50: '#F3F6F4',
          900: '#0E291C',
          950: '#061A11',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};