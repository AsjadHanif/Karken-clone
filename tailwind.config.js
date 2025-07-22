// tailwind.config.js
export default {
    content: ["./src/**/*.{html,js}"],
  
    theme: {
      extend: {
        keyframes: {
          slide: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-200%)' },
          },
        },
        animation: {
          slide: 'slide 10s linear infinite',
        },
      },
    },
  
    plugins: [],
  }
  