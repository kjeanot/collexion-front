/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customred: '#CE2C31',
        customorange: '#F76B15',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#CE2C31',

          secondary: '#F76B15',

          accent: '#00ffff',

          neutral: '#666666',

          'base-100': '#ffffff',

          info: '#0000ff',

          success: '#00ff00',

          warning: '#00ff00',

          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
