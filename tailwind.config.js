/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#685DC5',
        green: '#4FA16C',
        gray: '#535353',
        lightgray: '#DADADA',
        verylightgray: '#FBFBFB',
      },
      backgroundImage: {
        pattern: "url('../public/pattern-grid.svg')",
        patterndark: "url('../public/pattern-grid(dark).svg')",
      },
    },
  },
  plugins: [],
}
