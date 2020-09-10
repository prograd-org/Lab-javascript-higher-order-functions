//function-1
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//function-2
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.splice(3, 0, "noodles", "icecream");
console.log(foods);

//function-3
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const even = numberArray.filter(function (x) {
  if (x % 2 == 0) {
    return x;
  }
});
console.log(even);

const prime = numberArray.filter(function (x) {
  var count = 0;
  for (i = 2; i < x; i++) {
    if (x % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    return x;
  }
});
console.log(prime);

//function-4
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const nonprime = numberArray.filter(function (x) {
  var count = 0;
  for (i = 2; i < x; i++) {
    if (x % i == 0) {
      count++;
    }
  }
  if (count != 0) {
    return x;
  }
});
console.log(nonprime);

//function-5
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const arr = numberArray.filter((x) => x % 2 == 0);
console.log(arr);

//function-6
const myArray = [11, 34, 20, 5, 53, 16];
const arr = myArray.map((x) => x * x);
console.log(arr);

//function-7
const myArray = [2, 3, 5, 10];
const arr = myArray.reduce(function (acc, x) {
  return acc * x;
});
console.log(arr);
