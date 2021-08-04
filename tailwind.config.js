module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      primary: '#EB0042',
      secondary: '#070532',
      background: '#FFFFFF'
    },
    fontFamily: {
      headers: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
