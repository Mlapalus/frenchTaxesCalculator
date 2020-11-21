import FrenchTaxesCalculator from "./french-taxes-calculator.js";
import PartsCalculator from "./parts-calculator.js";
import TaxesCalculator from "./taxes-calculator.js";

const calculator = new FrenchTaxesCalculator();

const income = document.querySelector("#income");
const children = document.querySelector("#children");
const result = document.getElementById('result');

let resultIncome = 0;
let resultchildren = 0;

calculator.setPerson(1);
income.addEventListener("input",function() {
  resultIncome = calculator.setIncome(+this.value).calculate();
  result.innerHTML = resultIncome.toString();
});

children.addEventListener("input",function() {
  resultchildren = calculator.setChildren(+this.value).calculate();
  result.innerHTML = resultchildren.toString();

});


