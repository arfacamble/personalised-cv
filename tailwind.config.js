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
      headers: "var(--headers-font)",
      body: "var(--body-font)"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
