module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Manrope"],
      },
      colors: {
        "dark-grayish-blue": "	#48556a",
        "dark-blue": "	#6d7f97",
        "grayish-blue": "#9eafc2",
        "light-grayish-blue": "	#ecf2f8",
      },
    },
  },
  variants: {
    extend: {
      outline: ["active"],
      ringColor: ["focus"],
    },
  },
  plugins: [],
};
