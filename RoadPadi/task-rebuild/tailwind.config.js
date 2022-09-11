/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontFamily: {
      serif: 'inter',
    },
    fontSize: {
      'xs': '4px',
      'sm': '8px',
      'tiny': '20px',
      'base': '12px',
      'medium': '16px',
      'lg': '24px',
      'xl': '28',
      
    }
  },
  plugins: [],
}
