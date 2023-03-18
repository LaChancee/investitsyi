/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#100688',
        dark:'#000235',
        orange:'#FF8600',
        white:'#F8FDFF',
        secondary:'#D3DAFE',
        lightblue:'#DCE9FC',
        circle:"#AEB8FE80",
        grey: '#F1F2F6',
        purple: '#758BFD',
        greenGradient: "#C0E7E980",
        midGradient: "#BAC2F54D",
        endGradient: "#AEB8FE99",
        cardTransparent: "#E0E3F44D",
      },
    },
  },
  plugins: [],
}