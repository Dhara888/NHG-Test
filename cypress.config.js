const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  failOnStatusCode: false,
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'NHG',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    baseUrl: 'http://api.zippopotam.us/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "**/*.feature",
  },
})
