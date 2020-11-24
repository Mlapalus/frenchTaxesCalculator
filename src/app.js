import FrenchTaxesCalculator from "./french-taxes-calculator.js";
import PartsCalculator from "./parts-calculator.js";
import TaxesCalculator from "./taxes-calculator.js";

const calculator = new FrenchTaxesCalculator();

const income = document.querySelector("#income");
const children = document.querySelector("#children");
const situation = document.querySelector('#situation');

const sliceOne = document.getElementById('firstSlice');
const sliceTwo = document.getElementById('secondSlice');
const sliceThree = document.getElementById('thirdSlice');
const sliceFour = document.getElementById('fourthSlice');
const sliceFive = document.getElementById('fifthSlice');

const result = document.getElementById('result');
const result2 = document.getElementById('result2');

let resultIncome = 0;
let resultChildren = 0;
let resultSituation = 0;
let resultBySlide = [];

const takeResult = function() {
    resultBySlide = calculator.getTaxesBySlice();
    result.innerHTML = resultSituation.toString();
    sliceOne.innerHTML = resultBySlide[0] ?? 0 ;
    sliceTwo.innerHTML = resultBySlide[1] ?? 0;
    sliceThree.innerHTML = resultBySlide[2] ?? 0;
    sliceFour.innerHTML = resultBySlide[3] ?? 0;
    sliceFive.innerHTML = resultBySlide[4] ?? 0;
}

situation.addEventListener("change",function(){
  resultSituation = calculator.setPerson(+this.value).calculate();
  resultBySlide = calculator.getTaxesBySlice();
  result.innerHTML = resultSituation.toString();
  sliceOne.innerHTML = resultBySlide[0] ?? 0 ;
  sliceTwo.innerHTML = resultBySlide[1] ?? 0;
  sliceThree.innerHTML = resultBySlide[2] ?? 0;
  sliceFour.innerHTML = resultBySlide[3] ?? 0;
  sliceFive.innerHTML = resultBySlide[4] ?? 0;
}); 

income.addEventListener("input",function() {
  resultIncome = calculator.setIncome(+this.value).calculate();
  resultBySlide = calculator.getTaxesBySlice();
  result.innerHTML = resultIncome.toString();
  sliceOne.innerHTML = resultBySlide[0] ?? 0 ;
  sliceTwo.innerHTML = resultBySlide[1] ?? 0;
  sliceThree.innerHTML = resultBySlide[2] ?? 0;
  sliceFour.innerHTML = resultBySlide[3] ?? 0;
  sliceFive.innerHTML = resultBySlide[4] ?? 0;
});

children.addEventListener("input",function() {
  resultChildren = calculator.setChildren(+this.value).calculate();
  resultBySlide = calculator.getTaxesBySlice();
  result.innerHTML = resultChildren.toString();
  sliceOne.innerHTML = resultBySlide[0] ?? 0;
  sliceTwo.innerHTML = resultBySlide[1] ?? 0;
  sliceThree.innerHTML = resultBySlide[2] ?? 0;
  sliceFour.innerHTML = resultBySlide[3] ?? 0;
  sliceFive.innerHTML = resultBySlide[4] ?? 0;
});

