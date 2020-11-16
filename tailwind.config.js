module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
    fontFamily: {
      accent: '"Libre Franklin", Arial, sans-serif',
      body: 'Karla, Arial, sans-serif',
    },
    colors: {
      white: '#fff',
      black: {
        black: '#0c0c0c',
        muted: '#616161',
      },
      background: '#f5f5f5',
      darkbg: '#e5e5e5',
      blue: '#016da9',
      lightgreen: '#69f0ae',
      placeholder: '#c4c4c4',
    },
  },
};
