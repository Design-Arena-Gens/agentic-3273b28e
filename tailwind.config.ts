import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#121212',
        textPrimary: '#EDEDED',
        textSecondary: '#888888',
        accentGlow: '#00D1FF',
        accentSecondary: '#FFFFFF'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)']
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 209, 255, 0.35)',
        soft: '0 40px 120px rgba(0, 0, 0, 0.45)'
      },
      animation: {
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        floatSlow: 'floatSlow 12s ease-in-out infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, -10px, 0)' },
          '50%': { transform: 'translate3d(0, 10px, 0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
