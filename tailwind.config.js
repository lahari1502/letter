module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        heartBurst: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        heartBurst: 'heartBurst 1s ease-in-out',
      },
    },
  },
  plugins: [],
};