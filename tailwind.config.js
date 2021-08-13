module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      background: "var(--background-color)"
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
