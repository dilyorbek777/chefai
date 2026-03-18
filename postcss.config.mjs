const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      transitionDelay: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      fontFamily: {
        sans: ['var(--font-workSans)'],
        mono: ['var(--font-syne)'],
      },
      animation: {
        'random-float': 'random 8s ease-in-out infinite',
        'circle-move': 'circle 10s linear infinite',
      },
      keyframes: {
        random: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(15px, -30px)' },
          '40%': { transform: 'translate(-25px, 20px)' },
          '60%': { transform: 'translate(30px, 40px)' },
          '80%': { transform: 'translate(-15px, -20px)' },
        },
        circle: {
          'from': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
      },
    },
  }
};

export default config;
