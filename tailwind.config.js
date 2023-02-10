/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./shared/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    './node_modules/tw-elements/dist/js/**/*.js',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
    styled: true,
  },
  plugins: [
    require("daisyui"),
    // require('tw-elements/dist/plugin')
  ]
}
