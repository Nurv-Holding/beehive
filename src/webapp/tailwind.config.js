/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bee': '#DDA21F',
        'bee-strong-1': '#F59816',
        'bee-strong-2': '#EB7215',
        'bee-clean-1': '#F5C516',
        'bee-clean-2': '#EBD215',
        'bee-blue-clean': '#1F62DE',
        'bee-blue-strong': '#003391',
      }
    },
  },
  plugins: [],
}