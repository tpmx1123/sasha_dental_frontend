export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dental-blue': '#1e40af',
        'dental-teal': '#0d9488',
        'dental-orange': '#ea580c',
        'dental-gray': '#6b7280',
        'dental-light-blue': '#f0f9ff',
        'dental-dark-blue': '#1e3a8a',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
