const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled:
      process.env.WEBPACK_DEV_SERVER === "true" &&
      process.argv.join(" ").indexOf("build") !== -1,
    content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  },
  darkMode: false,

  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "empty",
    "read-only",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  plugins: [],
};
