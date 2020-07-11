const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];


function slice(arr) {
    var modifiedFood = [];
    modifiedFood = arr.slice(1, 4)
    console.log(modifiedFood);
    //return modifiedFood;
}

slice(foods)


//Function #2: Array Splice
const foods1 = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

function Splice(arr2) {
    var modifiedFood1 = [];
    modifiedFood1 = arr2.splice(2, 0, "noodles", "icecream");
    console.log(arr2)
}

Splice(foods1)


// Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(arr3) {
    let evenNumber = arr3.filter(function (num) {
        return num % 2 == 0;
    })
    console.log("even numbers are:", evenNumber);

}

isEven(numberArray);

function isPrime(arr3) {
    let primeNumber = arr3.filter(function (num) {
        for (i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
        }
        return num > 1;
    })
    console.log("prime numbers are: ", primeNumber);

}

isPrime(numberArray);


// Function #4: Reject
function nonPrime(arr4) {
    let notprimeNumber = arr4.filter(function (num) {
        for (i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0)
                return true;
        }
        return false;
    })
    console.log(notprimeNumber);

}

nonPrime(numberArray);



// Function #5: Lambda
// const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let isEven1 = (arr5) => {
    let evenNumber = arr5.filter(function (num) {
        return num % 2 == 0;
    })
    console.log("even numbers are:", evenNumber);

}

isEven1(numberArray);


// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(arr6) {
    let sqValue = arr6.map(function (num) {
        return num * num
    })
    console.log("square of the numbers are:", sqValue)
}

findSquareOfNumbers(myArray)


// Function #7: Reduce
const myArray7 = [2, 3, 5, 10];

function multiply(arr7) {
    let mulValue = arr7.reduce(function (initial, item) {
        return initial * item
    }, 1)
    console.log("multiplication value of all numbers in the given array:", mulValue)
}

multiply(myArray7)