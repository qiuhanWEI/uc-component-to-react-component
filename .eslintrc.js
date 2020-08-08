module.exports = {
  parser: "babel-eslint",

  extends: [
    "./node_modules/fbjs-scripts/eslint/.eslintrc.js",
    "plugin:eslint-plugin-demofortutorial-qh/recommended",
  ],

  plugins: ["react", "demofortutorial-qh"],

  rules: {
    "no-use-before-define": 2,
    "max-len": "off",
    "quotes": "off",
  },
};
