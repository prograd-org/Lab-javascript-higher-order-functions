const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// Function #1: Array Slice
// Create a new array named as modifiedFood and also create a slice() method.
// The slice() method should return the selected elements in an array, as a new array object.
// This method starts slicing the array from the given start argument and ends the slicing operation one
// element before the given second argument.
const slice = (start, end, array) => {
  let range = "";

  if (start >= array.length) {
    throw new Error("Array index out of bound");
  }
  for (let i = start; i < start + end; i++) {
    range += i;
  }

  return array.filter((item, index) => {
    if (!range.includes(index)) {
      return true;
    }
    return false;
  });
};

let modifiedFood = slice(1, 2, foods);

modifiedFood = slice(2, 1, modifiedFood);

console.log(`Slice: ${modifiedFood}`);
console.log();

// Function #2: Array Splice
// Take an example array. Create a new array named as modifiedFood and use splice() to get the
// below expected output. Elements are added to the original array.
// const foods = [pizza, burger, fingerChips, donuts, springRoll];
// Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];

modifiedFood = [...foods];
modifiedFood.splice(2, 0, "noodles", "icecream");

console.log(`Splice: ${modifiedFood}`);
console.log();

// Function #3: Filter
// Now, create a function isEven() which takes numberArray as argument and returns all even numbers
// from the given array.

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

const isEven = (list) => {
  return list.filter((item) => {
    if (item % 2 == 0) {
      return true;
    }
  });
};

console.log(`List of even numbers: ${isEven(numberArray)}`);
console.log();

// Function #3.1: Create another functon called isPrime()
// with takes same numberArray as argument and returns all prime numbers from the above given array.

const isPrime = (list) => {
  return list.filter((item) => {
    if (item == 1) {
      return false;
    }
    let count = 0;
    for (let i = 1; i <= item; i++) {
      if (item % i == 0) {
        count++;
      }
      if (count == 3) {
        return false;
      }
    }
    return true;
  });
};

console.log(`List of Prime numbers: ${isPrime(numberArray)} \n`);

// Function #4: Reject
// Create a function nonPrime() which takes numberArray as argument and return all non-prime numbers
const reject = (rejectList, list) => {
  return list.filter((item) => {
    if (rejectList.indexOf(item) != -1) {
      return false;
    }
    return true;
  });
};

const nonPrime = (list) => {
  return reject(isPrime(list), list);
};

console.log(
  `List of non prime numbers using reject: ${nonPrime(numberArray)} \n`
);

// Function #5: Lambda
// Now, rewrite the function isEven() by using the concept of Lambda Function.
const isEvenLambda = (list) => {
  return list.filter((item) => {
    if (item % 2 == 0) {
      return true;
    }
  });
};
console.log(
  `List of even numbers using lambda: ${isEvenLambda(numberArray)} \n`
);

// Function #6: Map
// create a function findSquareOfNumbers() which takes the following array called
//  myArray as argument and returns square value of all elements in the given array.
const myArray = [11, 34, 20, 5, 53, 16];

const findSquareOfNumbers = (myArray) => {
  return myArray.map((item) => {
    return item ** 2;
  });
};

console.log(`List of squared numbers: ${findSquareOfNumbers(myArray)} \n`);

// Function #7: Reduce
// Create a function multiply() which takes an argument of myArray which
// holds the values as [2, 3, 5, 10] and returns multiplication value of all numbers in the given array.

const multiply = (myArray) => {
  return myArray.reduce((acc, item) => {
    return acc * item;
  }, 1);
};

console.log(`The muliplication value using reduce: ${multiply(myArray)}`);
