const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

import FrenchTaxesCalculator from "../../src/french-taxes-calculator";
const calculatorFrenchTaxes = new FrenchTaxesCalculator();


Given('my household contains {int} persons', function (nbPerson) {
    calculatorFrenchTaxes.setPerson(nbPerson);

});

Given('we have {int} children in {string} custody', function (nbChildren, mode) {
      calculatorFrenchTaxes.setChildren(nbChildren);
      calculatorFrenchTaxes.setCustodyMode(mode);

});

Given('we have a income of {int}', function (income) {
      calculatorFrenchTaxes.setIncome(income);
});

When('I calculate my taxes', function () {
      calculatorFrenchTaxes.calculate();
});

Then('the taxes should be {int}', function (taxes) {

  const result = calculatorFrenchTaxes.getTaxes() ;
  assert.equal(result, taxes);
});
