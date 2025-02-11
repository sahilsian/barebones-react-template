const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(slider|popover).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        overused: ['OverusedGrotesk', 'sans-serif']
      }
    },
  },
  plugins: [nextui()],
}
