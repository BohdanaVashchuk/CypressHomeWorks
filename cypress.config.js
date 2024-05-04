const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000, 
  // pageLoadTimeout:10000,
  resolve: {
    // Додайте чутливі до регістру шляхи
    caseSensitive: true
  },
  e2e: {
    setupNodeEvents(on, config) {
   
      // implement node event listeners here
    },
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space'
  },
});
