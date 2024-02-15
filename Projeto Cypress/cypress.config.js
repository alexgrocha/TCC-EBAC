const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  pageLoadTimeout: 30000,
  video: false,
  videoUploadOnPasses: true,
  videoCompression: 15,
  e2e: {
    setupNodeEvents(on, config) {
    },

    "experimentalStudio": true,
    "screenshotOnRunFailure": false,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/",
  },
});
