/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    './index.html',
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
}

