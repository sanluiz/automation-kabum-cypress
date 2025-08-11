const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config;
    },
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1280,
    viewportHeight: 800
  }
});
