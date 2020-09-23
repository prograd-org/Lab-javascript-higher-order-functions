//function1
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

//function2
var modifiedFood = foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

//function3
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const even_num = numberArray.filter(function (num) {
  if (num % 2 == 0) {
    return num;
  }
});
console.log(even_num);

const prime_num = numberArray.filter(function (num) {
  var count = 0;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 0) {
    return num;
  }
});
console.log(prime_num);

//function4
const nonprime = numberArray.filter(function (num) {
  var count = 0;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count != 0) {
    return num;
  }
});
console.log(nonprime);

//function5
const arr = numberArray.filter((x) => x % 2 == 0);
console.log(arr);

//function6
const myArray = [11, 34, 20, 5, 53, 16];
const square = myArray.map((num) => num * num);
console.log(square);

//function7
const myArray1 = [2, 3, 5, 10];
const mul = myArray.reduce(function (init, item) {
  return init * item;
});
console.log(mul);