//function 1

const foods = ["pizza", "burger", "fingerChips", " donuts", "springRoll"];
let modifiedFood = [];
modifiedFood = foods.splice(4, 1);
console.log(foods);
modifiedFood = foods.splice(0, 1);
console.log(foods);

//function 2

modifiedFood = foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

// function 3
// prime numbers
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
prime = numberArray.filter(function (isPrime) {
  for (let start = 2; isPrime > start; start++) {
    if (isPrime % start == 0) {
      return false;
    }
  }
  return isPrime > 1;
});
console.log(prime);

//even numbers
let even = numberArray.filter(function (isEven) {
  return isEven % 2 == 0;
});
console.log(even);

//function 4

let nonprime = numberArray.filter(function (isnonPrime) {
  return isnonPrime % 2 != 1;
});
console.log(nonprime);

//function 5

var isEven = numberArray.filter((value) => value % 2 === 0);

//function 6
const myArray = [11, 34, 20, 5, 53, 16];

let findSquareOfNumbers = myArray.map(function (item, index, array) {
  return item * item;
});
console.log(findSquareOfNumbers);

//function 7
function multiply(a, b) {
  return a * b;
}
const abc = [2, 3, 5, 10];

let p = abc.reduce(multiply, 1);
console.log(p);
