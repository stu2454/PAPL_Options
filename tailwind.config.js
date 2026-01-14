/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ndis: {
          purple: '#4A0080',
          teal: '#00A9CE',
          green: '#00A651',
          orange: '#FF8200',
          red: '#D41367',
        }
      }
    },
  },
  plugins: [],
}
