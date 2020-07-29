const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

var modifiedFood = [];

//Function 1: Array Slice

function slice(arr) {
    var modifiedFood = [];
    modifiedFood = arr.slice(1, 4)
    return modifiedFood;
}

modifiedFood = slice(foods);
console.log(modifiedFood);


// Function 2: Array Splice

function splice(arr) {
    modifiedFood = arr.splice(2, 0, "noodles", "icecream");
    console.log(arr);
}

splice(foods);

function isEven(numberArr) {
    numberArr = numberArr.filter((item) => item % 2 == 0);
    console.log(numberArr);
}

// Function #3: Filter

function isPrime(numberArr) {
    var flag;
    numberArr = numberArr.filter((item) => {
        flag = 1;
        for (let i = 2; i < item; i++) {
            if (item % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            return item;
        }
    });
    console.log(numberArr);
}

// Function #4: Reject

function nonPrime(numberArr) {
    var flag;
    numberArr = numberArr.filter((item) => {
        flag = 0;
        for (let i = 2; i < item; i++) {
            if (item % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 1) {
            return item;
        }
    });
    console.log(numberArr);
}


const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
isEven(numberArray);
isPrime(numberArray);
nonPrime(numberArray);

// Function #5: Lambda

let isEvenbyLamba = (noArr) => { return noArr.filter((item) => item % 2 == 0) }
console.log(isEvenbyLamba(numberArray));

// Function #6: Map

let findSquareOfNumbers = (myArray) => { return myArray.map((item) => item * item) }

const myArray = [11, 34, 20, 5, 53, 16];
console.log(findSquareOfNumbers(myArray));

// Function #7: Reduce

function multiply(myArray) {
    return myArray.reduce((item, init) => init * item);
}

const myArray2 = [2, 3, 5, 10];
console.log(multiply(myArray2));
