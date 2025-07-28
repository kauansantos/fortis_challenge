const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.random.org/calendar-dates",
    viewportWidth: 1280,
    viewportHeight: 800
  }
});
