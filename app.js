// Function 1 : Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(foods.indexOf("pizza")+1, foods.indexOf("springRoll"));

console.log(modifiedFood);

// Function 2 : Array Splice
const foods_1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood_1 = foods_1.splice(2, 0, "noodles", "icecream");

console.log(foods_1);

// Function 3 : Filter

const numberArray = [12,324,213,4,2,3,45,4234];
const res = numberArray.filter(isEven);

function isEven(number) {
    return number%2 == 0;
}

console.log(res);

const ans = numberArray.filter(isPrime);

function isPrime(number) {
    for(let i=2; i<number; i++) {
        if(number%i == 0)
            return false;
    }

    return true;
}

console.log(ans);

// Function 4 : Reject

const a = numberArray.filter(nonPrime);

function nonPrime(number) {
    for(let i=2; i<number; i++) {
        if(number%i == 0)
            return true;
    }

    return false;
}

console.log(a);

// Function 5 : Lambda

let isEven1 = (number) => {
    return number%2 == 0;
}

const res1 = numberArray.filter(isEven1);

console.log(res1);

// Function 6 : Map

const myArray = [11, 34, 20, 5, 53, 16];

const newArray = myArray.map(findSquareOfNumbers);

function findSquareOfNumbers(num) {
    return num*num;
}

console.log(newArray);

// Function 7 : Reduce

const myArray1 = [2, 3, 5, 10];

const mul = myArray1.reduce((a,b) => a*b, 1);

console.log(mul);