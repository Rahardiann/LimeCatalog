/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#F9FDF2', 
        'second' : '#9AD72B',
        'third' : '#EDF1E6',
        'four' : '#5AE06D',
        'five' : '#E2F8DC',
      }

    },
  },
  plugins: [],
}

