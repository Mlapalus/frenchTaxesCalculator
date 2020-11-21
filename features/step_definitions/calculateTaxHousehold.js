const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

import TaxHousehold from "../../src/tax-household-calculator.js";
const taxHousehold = new TaxHousehold();

Given('I am a foyer with {int} person', function (nbPerson) {
  
  taxHousehold.setNbPerson(nbPerson);
          
});


Given('I am a foyer with {int} person with {string}', function (nbPerson, status) {
    
    taxHousehold.setNbPerson(nbPerson);
    taxHousehold.setStatus(status);
});


When('I want calculate my tax household', function () {
  taxHousehold.calculate();
});
       

Then('the result should be {int}', function (result) {

  const resultHouseHold = taxHousehold.getHouseHold();
  assert.equal(resultHouseHold, result);

});


