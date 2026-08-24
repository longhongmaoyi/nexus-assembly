/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F3F7FB',
          100: '#E4ECF4',
          200: '#C5D6E6',
          300: '#9AB4CC',
          400: '#6489A9',
          500: '#3F6787',
          600: '#2B4F6E',
          700: '#1D3B57',
          800: '#132C44',
          900: '#0C1E31',
          950: '#071423',
        },
        brand: {
          50: '#F4FAEC',
          100: '#E5F5D2',
          200: '#CBEBA6',
          300: '#A9DC72',
          400: '#8FCD4C',
          500: '#7AC143',
          600: '#62A533',
          700: '#4E8429',
          800: '#406A24',
          900: '#365820',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      boxShadow: {
        card: '0 6px 24px rgba(7, 20, 35, 0.08)',
        'card-lg': '0 16px 48px rgba(7, 20, 35, 0.16)',
      },
    },
  },
  plugins: [],
}
