//function1
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//function2
var modifiedFood = foods.splice(2,0, "noodles", "icecream");
console.log(foods);

//function3
const numberArray = [12,324,213,4,2,3,45,4234];
const isEven = numberArray.filter(function (num) {
    if (num % 2 == 0) {
        return num;
    }
});
console.log(isEven);

const isPrime = numberArray.filter(function (num){
    var count = 0;
    for (i =2; i< num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count == 0) {
        return num;
    }
});
console.log(isPrime);

//function4
const nonPrime= numberArray.filter(function(num) {
    var count = 0;
    for (i =2; i< num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count != 0) {
        return num;
    }
});
console.log(nonPrime);

//function5
const even = numberArray.filter((x) => x % 2 == 0);
console.log(even);

//function6
const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers = myArray.map((num) => num*num);
console.log(findSquareOfNumbers);

//function7
const myArr = [2, 3, 5, 10];
const multiply = myArr.reduce(function (init, item) {
    return init * item;
});
console.log(multiply);