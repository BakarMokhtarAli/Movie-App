export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        'medium':{ 'min': "0px", 'max': "768px"}
      }
    },
  },
  plugins: [],
}