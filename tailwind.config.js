/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['var(--ff-titillium)'],
      },
      colors: {
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
      },
    },
  },
  plugins: [],
};
