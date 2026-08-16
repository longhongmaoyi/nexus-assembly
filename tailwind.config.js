module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'assembly-navy': '#0E1B33',
        'assembly-red': '#E2231A',
        'assembly-panel': '#EEF1F7',
        'assembly-ink': '#1A1A1A',
        'assembly-slate': '#647489',
        'assembly-border': '#D4DCE6',
      },
      boxShadow: {
        'assembly-card': '0 4px 20px rgba(14, 27, 51, 0.06)',
      },
      borderRadius: {
        'assembly-card': '10px',
      },
      maxWidth: {
        'assembly': '1440px',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Noto Sans', 'Noto Sans SC', 'Noto Sans TC', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'assembly-blueprint': "repeating-linear-gradient(45deg, rgba(226,35,26,0.04), rgba(226,35,26,0.04) 4px, transparent 4px, transparent 8px)",
      },
    },
  },
  plugins: [],
}
