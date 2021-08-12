module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      primary: '#ff323c',
      secondary: '#FFFFFF',
      background: '#323232'
    },
    fontFamily: {
      headers: ['Poppins', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
