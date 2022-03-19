
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(
    foods.indexOf("pizza") + 1,
    foods.indexOf("springRoll")
);
console.log(modifiedFood);


var foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood1 = foods1.splice(2, 0, "noodles", "icecream");
console.log(foods1);


const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEvan(numberArray) {
    return numberArray.filter(function (number) {
        if (number % 2 === 0) {
            return number;
        }
    });
}

var evenNumbers = isEvan(numberArray);
console.log(evenNumbers);

function isPrime(numberArray) {
    return numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}

var primeNumbers = isPrime(numberArray);
console.log(primeNumbers);

var reject = {

};
var evenNumbers1 = numberArray.filter((number) => {
    if (number % 2 == 0) return number;
});
console.log(evenNumbers1);

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    return myArray.map(function (number) {
        return number * number;
    });
}

var SquareOfNumbers = findSquareOfNumbers(myArray);
console.log(SquareOfNumbers);

const myArray1 = [2, 3, 5, 10];

function multiply(myArray1) {
    return myArray1.reduce((a, b) => a * b, 1);
}

var multiplication = multiply(myArray1);
console.log(multiplication); 