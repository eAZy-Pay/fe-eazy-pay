/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#007AFF',
      },
      animation: {
        'spin-slow': 'spin-custom 2s linear infinite',
        'appear-slow': 'appear-slow 2.5s ease-in-out',
      },

      keyframes: {
        'spin-custom': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(270deg)' },
        },
        'appear-slow': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
