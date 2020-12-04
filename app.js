//first example
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood = foods.slice(1, 4);

//second example
const foods1 = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods1.splice(2, 0, 'noodles', 'icecream');
console.log(foods1);

// isEven
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven{
    let even = numberArray.filter(function (item) {
        return item % 2 == 0;
    });
}
console.log(isEven)

// isPrime

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isPrime() {
    numArray = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}


// reject 

numArray = numberArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return true;
    }
    return false;
});

// Function #5: Lambda

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let even = numberArray.filter(item => item % 2 == 0);


//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let arr = myArray.map(item => item * item);


// Function #7: Reduce
let myArray = [2, 3, 5, 10];
let arr = myArray.reduce(function (a, item) {
    return a = a * item;
}, 0);

let myArray = [2, 3, 5, 10];
let arr = myArray.reduce((a, item) => a = a * item);


//implementing map with reduce
const myArray = [11, 34, 20, 5, 53, 16];
let arr = myArray.map(item => item * item).reduce((a, item) => a = a * item);