const { defineConfig } = require("cypress");
const allureWriter=require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({

 

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

   
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      allureWriter(on,config)
 

      require('cypress-mochawesome-reporter/plugin')(on);


      return config
    },
  },

  env:{
    QA:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
