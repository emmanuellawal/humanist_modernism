module.exports = {
  // Only lint source files, never node_modules
  "src/**/*.{njk,md,html,json}": ["prettier --write"],
  "src/**/*.css": ["stylelint --fix", "prettier --write"],
  ".eleventy.js": ["prettier --write", "eslint --fix"],
  "tailwind.config.js": ["prettier --write", "eslint --fix"],
  "postcss.config.js": ["prettier --write", "eslint --fix"],
};
