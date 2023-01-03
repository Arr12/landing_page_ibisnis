/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        'slideOpenMenu' : 'slideOpenMenu 3s linear infinite'
      },
      keyframes : {
        slideOpenMenu : {
          '0%' : {
            width: '0%',
          },
          '100%' : {
            width: '80%'
          }
        }
      }
    },
  },
  plugins: [],
}
