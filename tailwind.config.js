/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neo': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
        'neo-dark': '20px 20px 60px #1a1a1a, -20px -20px 60px #262626',
      },
    },
  },
  plugins: [],
}