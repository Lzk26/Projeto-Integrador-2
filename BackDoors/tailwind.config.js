export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 0 25px rgba(108, 0, 255, 0.3)',
        '2xl': '0 0 40px rgba(108, 0, 255, 0.45)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
