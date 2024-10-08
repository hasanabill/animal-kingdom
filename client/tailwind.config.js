/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          600: '#1E3A8A',
          800: '#1E40AF',
        },
      },
    },
  },
  plugins: [],
}

