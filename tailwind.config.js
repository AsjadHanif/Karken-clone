/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        animation: {
          slide: 'slide 45s linear infinite',
          slide2: 'slide2 63s linear infinite',
          slide3: 'slide3 52s linear infinite',
          slide4: 'slide4 76s linear infinite',
          slide5: 'slide5 26s linear infinite',
        },
        keyframes: {
          slide: {
            '0%': { transform: 'translateX(-101%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slide2: {
            '0%': { transform: 'translateX(-150%)' },
            '100%': { transform: 'translateX(-49%)' },
          },
          slide3: {
            '0%': { transform: 'translateX(-101%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slide4: {
            '0%': { transform: 'translateX(-101%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slide5: {
            '0%': { transform: 'translateX(-102%)' },
            '100%': { transform: 'translateX(0)' },
          },
      },
    },
    plugins: [],
  }
  };