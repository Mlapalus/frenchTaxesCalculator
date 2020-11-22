export default class TaxesCalculator {

  constructor() {
    this.seuils = [
      {max: 10064, rate:0},
      {max: 25659, rate:11},
      {max: 73369, rate:30},
      {max: 157806, rate:41},
      {max: Infinity, rate:45}
    ]
    this.income = 0;
    this.parts = 1;
    this.person = 1;
    this.totalBySlice = [];
  }

  setIncome(income)
  {
    this.income = income;
    return this;
  }
  
  gettTotalBySlice()
  {
    return this.totalBySlice;
  }


  setParts(parts)
  {
    this.parts = parts;
    return this;
  }

  setPerson(person)
  {
    this.person = person;
    return this;
  }


  calculate()
  {
      const byPerson = this.person/this.person;
      const newIncome = (this.income/this.parts) * byPerson;
      const result= Math.floor(this.getTaxesByParts(newIncome) * this.parts);
      this.totalBySlice = this.totalBySlice.map(x => Math.floor(x) * this.parts);
      return result;
  }


  getTaxesByParts(income) {
    let alreadyCounted = 0;
    let i = 0;
    let totalTaxes = 0;
    this.totalBySlice = [];


    while(alreadyCounted < income)
    {
      let actualTaxe;
      const slice = this.seuils[i];
      let level= Math.min(income, slice.max);

      if (i>0) {
        actualTaxe = ((level - this.seuils[i-1].max) * slice.rate) /100;
      } else {
        actualTaxe = level *slice.rate / 100;
      }
      this.totalBySlice.push(actualTaxe);
      alreadyCounted = slice.max;
      i++;
      totalTaxes += actualTaxe;
    }
    return totalTaxes; 
  }
}