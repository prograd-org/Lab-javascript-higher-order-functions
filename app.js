//function Array slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
console.log(foods);

let modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//Array splice
const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood1 = foods1.splice(2, 0, "noodles", "icecream");
console.log(foods1);

//Array filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
console.log(`Original array: ${numberArray}`);
let evenos = numberArray.filter(function (num) {
  return num % 2 == 0;
});
console.log(`Even numbers ${evenos}`);

function isPrime(numberArray) {
  let prime = numberArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) return false;
    }
    return true;
  });
  console.log(`Prime numbers: ${prime}`);
}
isPrime(numberArray);

//Array reject
function nonPrime(numberArray) {
  let nonprime = numberArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) return true;
    }
    return false;
  });
  console.log(`Non Prime numbers: ${nonprime}`);
}
nonPrime(numberArray);

//Array Lambda
let evenNum = numberArray.filter((num) => num % 2 == 0);
console.log(`Even numbers using Lamda: ${evenNum}`);

//Array map
var myArray = [11, 34, 20, 5, 53, 16];
console.log(`original array: ${myArray}`);

function findSquareOfNumbers(myArray) {
  let sqr = myArray.map((num) => {
    return num * num;
  });
  console.log(`Squares of numbers: ${sqr}`);
}
findSquareOfNumbers(myArray);

//Array Reduce
var myArray = [2, 3, 5, 10];
console.log(`Original array: ${myArray}`);

function multiply(myArray) {
  let product = myArray.reduce((item, initial) => item * initial, 1);
  console.log(`multiplication : ${product}`);
}
multiply(myArray);
