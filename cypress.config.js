const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  video: true,
  screenshotOnRunFailure: true,

  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",

  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",

    setupNodeEvents(on, config) {
      return config;
    },
  },
});