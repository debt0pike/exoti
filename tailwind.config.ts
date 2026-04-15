import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#111118',
        surface2: '#1a1a24',
        gold: '#c9a96e',
        'gold-light': '#e8c98a',
        silver: '#a8b2c4',
        text: '#e8e4dc',
        'text-dim': 'rgba(232,228,220,0.5)',
      },
      fontFamily: {
        'cormorant': ['var(--font-cormorant)'],
        'space-mono': ['var(--font-space-mono)'],
        'noto-serif': ['var(--font-noto-serif)'],
        'noto-sans-kr': ['var(--font-noto-sans-kr)'],
      },
    },
  },
  plugins: [],
}

export default config
