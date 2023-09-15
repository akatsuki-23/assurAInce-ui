/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple0: "#F2E7FE",
        purple1: "#DBB2FF",
        purple2: "#BB86FC",
        purple3: "#985EFF",
        purple4: "#7F39FB",
        purple5: "#6200EE",
        purple6: "#5600E8",
        purple7: "#3700B3",
        purple8: "#30009C",
        purple9: "#23036A",
        blue: "#5EBBFF",
        "semantic-green": "#04802E",
        "semantic-dark-green": "#036B26",
        "semantic-light-green": "#E7F6EC",
        "semantic-red": "#AD3307",
        "semantic-light-red": "#FFECE5",
        "semantic-blue": "#04326B",
        "semantic-light-blue": "#E3EFFC",
        "semantic-gray": "#344054",
        "semantic-light-gray": "#F0F2F5",
      },
    },
  },
  plugins: [],
};
