/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@catppuccin/tailwindcss', {
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: 'latte'
    }),
  ],
}

