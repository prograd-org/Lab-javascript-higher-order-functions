// Function #1: Array Slice
let foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.slice(1, foods.length - 1);
// console.log(modifiedFood);

// Function #2: Array Splice
foods2 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods2.splice(2, 0, "noodles", "ice cream");
// console.log(foods2);

// Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let isEven = (numberArray) => {
  let res = numberArray.filter((num) => num % 2 == 0);
  return res;
};
let isPrime = (numberArray) => {
  let res = numberArray.filter((num) => {
    if (num == 2 || num == 1) {
      return num;
    } else {
      let i = num - 1,
        flag = true;
      while (i > 1) {
        if (num % i == 0) {
          flag = false;
          break;
        } else {
          i--;
        }
      }
      if (flag) {
        return num;
      }
    }
  });
  return res;
};
// console.log(isEven(numberArray));
// console.log(isPrime(numberArray));

// Function #4: Reject
let reject = (numberArray) => {
  let res = numberArray.filter((num) => {
    let i = num - 1,
      flag = false;
    while (i > 1) {
      if (num % i == 0) {
        flag = true;
        break;
      } else {
        i--;
      }
    }
    if (flag) {
      return num;
    }
  });
  return res;
};
let newarr = reject(numberArray);
// console.log(newarr);

// Function #5: Lambda
let even = numberArray.filter((num) => num % 2 == 0);
// console.log(even);

// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = (myArray) => {
  let res = [];
  myArray.map((num) => {
    res.push(num * num);
  });
  return res;
};
// console.log(findSquareOfNumbers(myArray));

// Function #7: Reduce
let myArray2 = [2, 3, 5, 10];
let multiply = (myArray) => {
  return myArray.reduce((a, b) => {
    return a * b;
  });
};
console.log(multiply(myArray2));
