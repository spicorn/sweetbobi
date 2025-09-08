/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'splash': 'splash 4s ease-in-out infinite',
        'butterfly': 'butterfly 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        splash: {
          '0%': { transform: 'scale(0.8) rotate(0deg)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1) rotate(180deg)', opacity: '0.6' },
          '100%': { transform: 'scale(0.9) rotate(360deg)', opacity: '0.8' },
        },
        butterfly: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(5px) rotate(5deg)' },
          '50%': { transform: 'translateX(0px) rotate(0deg)' },
          '75%': { transform: 'translateX(-5px) rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
}
