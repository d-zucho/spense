/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F0EEEB',
      },
      screens: {
        lg: '1024px',
        md: '768px',
        sm: '640px',
      },
    },
  },
  plugins: [],
}
