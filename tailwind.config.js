import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        aurora: {
          1: '#6d5efc',
          2: '#b14bf4',
          3: '#2fb8ff',
          4: '#12c8a0',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px var(--color-accent-glow)',
        'glow-lg': '0 0 70px -12px var(--color-accent-glow)',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'aurora-drift': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -4%) scale(1.15)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    typography,
  ],
}
