export default class TaxHousehold {

  constructor() {
    this.nbPerson = 0;
    this.status = "";
    this.houseHold = 0;
  }

  setNbPerson(nbPerson) {
    this.nbPerson = nbPerson;
  }

  getHouseHold(){
    return this.houseHold;
  }

  setStatus(status) {
    this.status = status;
  }

  calculate(){

   switch (this.status) {
        case 'married' :
            this.houseHold = 2 / this.nbPerson;
              break;
        case 'PACS' :
              this.houseHold = 2 / this.nbPerson;
              break;
        case 'cohabitation' :
              this.houseHold = 2;
              break;
        case 'single' :
              this.houseHold = 1
              break;
            default:
              this.houseHold = 1;
          }
      }
  }
