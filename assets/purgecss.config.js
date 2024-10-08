// purgecss.config.js
const purgecss = require('purgecss');

module.exports = {
  content: [
    '../index.html', // Path to your HTML file
    './assets/**/*.js', // Path to your JavaScript files, if they include any HTML strings
    './assets/**/*.html', // If you have any HTML files in your assets folder
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  output: './assets/bootstrap/bootstrap.min.css', // Output path for the minified CSS
};