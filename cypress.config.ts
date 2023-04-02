import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  video: false,
  screenshots: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
