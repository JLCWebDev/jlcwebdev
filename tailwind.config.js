/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {      
      height: {
      '128': '28rem',
      '100': '40vh',
      '104': '75vh',
      '112': '32rem',
    },},
  },
  plugins: [],
}

