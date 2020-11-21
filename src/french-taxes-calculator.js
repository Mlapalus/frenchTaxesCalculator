
import PartsCalculator from "./parts-calculator.js";
import TaxesCalculator from "./taxes-calculator.js";

export default class FrenchTaxesCalculator {

  constructor() {

    this.person = 1;
    this.children = 0;
    this.income = 0;
    this.result = 0;
    this.custodyMode = 'total';
  }

  setCustodyMode(custodyMode) {
    this.custodyMode = custodyMode;
    return this;
  }
  setPerson(person) {
    this.person = person;
    return this;
  }
  setChildren(children) {
    this.children = children;
    return this;
  }
  setIncome(income) {
    this.income = income;
    return this;
  }

  getTaxes(){
    return this.result;
  }
  getParts(){
    const partscalculator = new PartsCalculator();
    partscalculator.setPerson(this.person);
    partscalculator.setChildren(this.children);
    partscalculator.setCustodyMode(this.custodyMode);
    partscalculator.setHousehold(1);
    partscalculator.calculate();
    return partscalculator.getParts();
  }

  calculate() {

    const nbParts = this.getParts();

    const taxescalculator = new TaxesCalculator();
    taxescalculator.setIncome(this.income);
    taxescalculator.setPerson(this.person);
    taxescalculator.setParts(nbParts);
    taxescalculator.calculate();

    this.result = taxescalculator.calculate();
    return this.result;

  }
}