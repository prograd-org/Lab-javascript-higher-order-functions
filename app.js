// Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const modifiedFoods = foods.slice(1, 4)
console.log("Slice result:", modifiedFoods);

// Function #2: Array Splice
const foods1 = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods1.splice(2, 0, 'noodles', 'iceCream');
console.log("Splice result:", foods1);

// Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArray) {
    return numberArray.filter(number => number % 2 === 0);
}
console.log("Filter by even:", isEven(numberArray));

const isPrime = (numberArray) => {
    return numberArray.filter(number => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    });
}
console.log("Filter by prime:", isPrime(numberArray));

// Function #4: Reject
const reject = (rejectArr) => {
    return numberArray.filter(number => rejectArr.indexOf(number) === -1);
}
console.log("Reject by prime:", reject(isPrime(numberArray)));

// Function #5: Lambda
const isEven1 = (numberArray) => numberArray.filter(number => number % 2 === 0)
console.log("Filter by even (lambda fn):", isEven1(numberArray));

// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers = (arr) => arr.map(number => number * number);
console.log("Map squares:", findSquareOfNumbers(myArray));

const myArray1 = [2, 3, 5, 10];
const multiply = (arr) => arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log("Using reduce to mutiply:", multiply(myArray1));