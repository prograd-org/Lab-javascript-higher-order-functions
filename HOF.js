//### Function #1: Array Slice//

const foods = [pizza, burger, fingerChips, donuts, springRoll];

var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);


// ### Function #2: Array Splice

const foods = [pizza, burger, fingerShips, donuts, springRoll];
var modifiedFood = foods.slice();
modifiedFood.splice(2, 0, "noodles", "icecream");
console.log(modifiedFood);

// ### Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(numberArray) {
    let even = numberArray.filter(function (num) {
        return (num % 2 == 0);
    });
}
console.log(isEven);


function isPrime(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}
console.log(numArray);

// ### Function #5: Lambda

function isEven(numArray) {
    let even = numArray.filter((num) => {
        if (num % 2 == 0)
            return num;
    });
}

// ### Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    let arr = myArray.map(item => item * item);
}

// Function #7: Reduce
let myArray = [2, 3, 5, 10];
let arr = myArray.reduce(function (a, item) {
    return a = a * item;
}, 0);