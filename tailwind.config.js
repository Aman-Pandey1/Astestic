/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#4A533C',
          dark: '#3D4330',
          deep: '#4a4d35',
          muted: '#5a6348',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          soft: '#FCFBF7',
          warm: '#FDFCF6',
        },
        gold: {
          DEFAULT: '#E5BA73',
          soft: '#D4AF37',
          muted: '#C9A86C',
          light: '#D4B57E',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.06)',
        card: '0 2px 12px rgba(0,0,0,0.05)',
        form: '0 8px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
