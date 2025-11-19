import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'paper': '#f5f1e8',
        'primary-text': '#2c1810',
        'secondary-text': '#6b5344',
        'muted-text': '#8b7355',
        'forest': '#3d5a3b',
        'coffee': '#6f4e37',
        'light-accent': '#c9b8a8',
        'border': '#d4cac0',
      },
      spacing: {
        'container-max': '1200px',
      },
      maxWidth: {
        'container': '1200px',
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px
        'h1-md': ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }], // 48px
        'h1-lg': ['3.75rem', { lineHeight: '4rem', fontWeight: '700' }], // 60px
        'h2': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        'h2-md': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        'h3': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 18px
        'h3-md': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 20px
        'body': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
        'muted': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12px
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
