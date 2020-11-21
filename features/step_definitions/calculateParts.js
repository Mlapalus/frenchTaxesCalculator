const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

import PartsCalculator from "../../src/parts-calculator.js";
const partsCalculator = new PartsCalculator();


Given('{int} household with {int} person and {int} children in {string} mode', function (household, person, children, mode) {
  
  partsCalculator.setHousehold(household);
  partsCalculator.setPerson(person);
  partsCalculator.setChildren(children);
  partsCalculator.setCustodyMode(mode);


});

When('I calculate the number of parts', function () {

  partsCalculator.calculate();

});

  Then('The result should be {float} part(s)', function (nbParts) {

    const parts =partsCalculator.getParts();
    assert.equal(parts, nbParts);

  });
