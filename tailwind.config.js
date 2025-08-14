/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'unclare': ['Unclare', 'sans-serif'],
        'britanica': ['Britanica', 'sans-serif'],
        'britanica-regular': ['Britanica Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
