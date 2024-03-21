module.exports = {
  trailingComma: "none",
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: "as-needed",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
  endOfLine: "auto",
  tailwindConfig: "./tailwind.config.js",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
  plugins: ["prettier-plugin-tailwindcss"],
};
