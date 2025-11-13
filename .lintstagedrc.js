module.exports = {
  // Format ALL files matching patterns (exclusions handled by .prettierignore)
  // This ensures pre-commit catches the same issues as CI/CD
  "**/*.{js,njk,md,html,css,json}": ["prettier --write"],

  // Lint JavaScript configuration files
  "{.eleventy.js,tailwind.config.js,postcss.config.js}": ["eslint --fix"],

  // Lint CSS source files
  "src/**/*.css": ["stylelint --fix"],
};
