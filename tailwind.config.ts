import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'amber-energy': '#E8A020',
        'amber-dim': '#B07818',
        'obsidian': '#080A0C',
        'deep': '#0D1117',
        'card-bg': '#111820',
        'border-dark': '#1E2A35',
        'white-warm': '#F4F0E8',
        'grey-energy': '#8A9BAA',
        'light-energy': '#C8D4DC',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'pulse-slow': 'pulse 2s infinite',
        'bar-grow': 'barGrow 1.5s ease forwards',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        barGrow: {
          from: { height: '0' },
          to: { height: 'var(--height)' },
        },
      },
    },
  },
  plugins: [],
}
export default config