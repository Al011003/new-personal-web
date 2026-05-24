/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        cream: '#F5F3EE',
        ink: '#1A1814',
        ink2: '#4A4740',
        ink3: '#9A9690',
        accent: '#2563EB',
        border: '#E8E5DF',
      },
      animation: {
        'float-1': 'float1 4s ease-in-out infinite',
        'float-2': 'float2 5s ease-in-out infinite',
        'float-3': 'float3 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 15s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'morph': 'morphBlob 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float1: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
        float2: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        float3: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-6px)' } },
        spinReverse: { from: { transform: 'rotate(360deg)' }, to: { transform: 'rotate(0deg)' } },
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } },
        morphBlob: {
          '0%,100%': { borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%' },
          '50%': { borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%' },
        },
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
