/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040916',
          900: '#071026',
          800: '#0c1a3a',
          700: '#132650',
        },
        brand: {
          yellow: '#fbbf24',
          orange: '#f97316',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        kenburns: 'kenburns 20s ease-in-out infinite alternate',
        'fade-up': 'fade-up 0.9s ease-out both',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(251, 191, 36, 0.45)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
