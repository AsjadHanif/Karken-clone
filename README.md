# Karken-clone
It is a trading related webite 

# How to run this project
1. Clone this project
2. Open this project in vs code
3. Open terminal and run this command

# run this command on terminal before changing anything
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: 'slide 50s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(120%)' },
        },
    },
  },
  plugins: [],
}
};