export default class PartsCalculator {

  constructor(){
    this.household = 1;
    this.person = 1;
    this.children = 0;
    this.parts = 0;
    this.custodyMode = "total";
    this.step = 0;
  }

  setChildren(children) {
    this.children = children;
  }

  setHousehold(household) {
    this.household = household;
  }

  setPerson(person) {
    this.person = person;
  }

  setCustodyMode(mode) {
    this.mode = mode;
  }

  getCustodyMode() {
    return this.mode;
  }

  getStep(mode) {

      switch(mode) {
      case 'alternating': this.step = 0.25;
      break;
      case 'total': this.step = 0.5;
      break;
    }
    return this.step;
  }

  calculate() {

    const step =this.getStep(this.mode);
    const partsByHousehold = (this.person * this.household);
    const partsByChildren = (this.children < 3) ? (step * this.children) : ((this.children -1) * (2*step));
    
    this.parts = partsByHousehold  + partsByChildren ;
  }
  

  getParts() {
    return this.parts;
  }
  

}