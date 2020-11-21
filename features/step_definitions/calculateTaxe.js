const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");


import TaxesCalculator from "../../src/taxes-calculator";
const calculator = new TaxesCalculator();


Given('{int} person(s) has an income of {int} and {float} part(s)', 
function (person, income,parts ) {

   calculator.setIncome(income).setParts(parts).setPerson(person);
      
  });

When('he uses the calculator', function () 
  {
    this.result = calculator.calculate();
  });

  
Then('taxes should be {int}', function (taxes) 
  {
      assert.equal(this.result, taxes);
  });