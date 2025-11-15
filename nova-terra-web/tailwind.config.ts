import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#658f4c',
        secondary: '#346d47',
        neutral: '#24352f'
      }
    }
  },
  plugins: []
} satisfies Config