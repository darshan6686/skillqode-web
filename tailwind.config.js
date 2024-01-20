/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'xs': '340px',
      'ms': '400px',
      'mss': '500px',
      'sm': '640px',
      'md': '768px',  
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container:{
      center:true,
      screens: {
        'sm': '640px',
        'md': '768px',  
        'lg': '1024px',
        'width': '1280px'
      }
    },
    extend: {},
  plugins: [],
}
}