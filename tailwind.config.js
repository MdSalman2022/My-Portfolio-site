/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#44FFDA", //BLUE

          "secondary": "#CCD6F6", //

          "accent": "#8892B0",

          "neutral": "#112244",

          "base-100": "#E7E6EA",

          "info": "#A8B2D1",

          "success": "#66F2CA",

          "warning": "#F1A01E",

          "error": "#E81725",

          "bg": "#081526",

          "text": "#CEDAF2"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}