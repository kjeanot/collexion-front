/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        customred: '#CE2C31',
        customorange: '#F76B15',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
