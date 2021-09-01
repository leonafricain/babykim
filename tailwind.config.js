module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js}',
     './nuxt.config.{js}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
   require('@tailwindcss/typography'),

  ],
}
