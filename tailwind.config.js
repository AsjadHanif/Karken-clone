/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        animation: {
          slide: 'slide 50s linear infinite',
          slide2: 'slide2 54s linear infinite',
          slide3: 'slide3 52s linear infinite',
        },
        keyframes: {
          slide: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slide2: {
            '0%': { transform: 'translateX(-50%)' },
            '100%': { transform: 'translateX(50)' },
          },
          slide3: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
      },
    },
    plugins: [],
  }
  };