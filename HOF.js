//1) SLICE- slices the array and returns a new array with the removed items.

//2) SPLICE - splices the original array

//3) FILTER - accepts a test function and test every element with the test function
// and returns the elements which returns true for the test function//

//4) MAP - accepts a function.
// Map method simply imposes the function's logic to each and every element//

//5) REDUCE - accepts a call-back function and a starting value.
//



//### Function #1: Array Slice//

const foods = [pizza, burger, fingerChips, donuts, springRoll];

//the first argument in the slice method is the starting point and the second arg. is the end point(upto but not including).//
//Slice method doesn't change the original array//
//it creates a new array//
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);


// ### Function #2: Array Splice
//splice method changes the original array//
const foods = [pizza, burger, fingerShips, donuts, springRoll];
var modifiedFood = foods.slice();
//the first argument in the splice method is the starting point//
//from which we wish to add the element, in this it is 2//
//the second argument is the number of items to be removed, 0 means no item to be removed//
//the third and forthcoming arguments are the items that needs to be added//
modifiedFood.splice(2, 0, "noodles", "icecream");
console.log(modifiedFood);

// ### Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
//Filter is an array method.//
// It accepts a test function as an argument//
// and returns a new array with only the elements for which the test function returns true.//
function isEven(numberArray) {
    let even = numberArray.filter(function (num) {
        return (num % 2 == 0);
    });
}
console.log(isEven);


function isPrime(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= number; i++) {
            if (number % i === 0) count++;
            else continue;
        }
        if (count > 2) return false;
        else return true;
    });
}
console.log(numArray);

// ### Function #5: Lambda

function isEven(numArray) {
    let even = numArray.filter(num => num % 2 == 0);
}

// ### Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    let arr = myArray.map(item => item * item);
}

// Function #7: Reduce
//Reduce takes a callback function and a starting value//
//Reduce method has two arguments, the first one is the starting value(used for iterations)//
//the starting value is initialized at the last//
// the call-back function takes two arguments//
//the first arg. is the accumalator and the 2nd arg. is the current value//
// the call-back function returns the accumalator value to be used in the next iteration//

let myArray = [2, 3, 5, 10];
let arr = myArray.reduce(function (a, item) {
    return a = a * item;
}, 0);
