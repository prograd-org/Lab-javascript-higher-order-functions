// Function #1: Array Slice
​
var foods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
let modifiedfoods = foods.slice(1, 4);
console.log(modifiedfoods);​
// Function #2: Array Splice

var newFoods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
newfoods.splice(2, 0, "icecream", "fingerchips");
console.log(newfoods);​
// Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let isEven = numberArray.filter(function (num) {
    return num % 2 == 0;
});
console.log(isEven);​
function isPrime(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
}



// Function #4: Reject

function nonPrime(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return true;
        }
        return false;
    });
    console.log(numArray);
}​
//## Function #5: Lambda

var isEven = numberArray.filter(value => value % 2 === 0);

// Function #6: Map
​
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    var x = myArray.map(value => value * value);
    console.log(x);
}​
// Function #7: Reduce
​
const myArray = [11, 34, 20, 5, 53, 16];

// map function applied to every element and returns any array of effected elements

// for first iteration squarednum stores 11*11 =121 in index-0
// for first iteration squarednum stores 11*11 =121 in index-0 and 34*34 in index-1 and so on upto all elements.....

var squarednum = myArray.map(function (item) {
    return item * item;
});
console.log(squarednum);
let sum = squarednum.reduce(function (initial, item) {
    return initial + item;
});
console.log(sum);​
// compressed code
let summed = myArray.map(function (item) {
    return item * item
}).reduce(function (initial, item) {
    initial + item;
}, 0);

let sum2 = myArray.map(value => value * value).reduce((initial, item) => initial + item);