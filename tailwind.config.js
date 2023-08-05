/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      colors: {
        'transparent': 'var(--transparent)',
        'gold': 'var(--gold)',
        'mc': 'var(--mc)',
        'smc': 'var(--smc)',
        'wc': 'var(--wc)',
        'bc': 'var(--bc)',
        'lc': 'var(--lc)',
        'dc': 'var(--dc)',
        'tcl': 'var(--tcl)',
        'tf': 'var(--tf)',
      },
    },
  },
  plugins: [],
}