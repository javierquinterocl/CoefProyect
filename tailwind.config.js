// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Questrial: ['"Questrial"', 'sans-serif'],
        Haken: ['"Hanken Grotesk"', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
