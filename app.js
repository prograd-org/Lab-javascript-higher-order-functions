var foods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
var modifiedFoods = foods.slice(1, 4);
console.log(modifiedFoods);

var foodSplice = ["pizza", "burger", "fingerchips", "donuts", "springroll"]
foodSplice.splice(2, 0, "noodles", "icecream")
console.log(foodSplice)

var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = numberArray.filter(function (item) {
    return item % 2 == 0
})

console.log(isEven)

let isPrime = numberArray.filter(function (item) {
    for (let i = 2; i < item; i++) {
        if (item % i === 0) return false;
    }
    return item !== 1;
})

console.log(isPrime)

let notPrime = numberArray.filter(function (item) {
    for (let i = 2; i < item; i++) {
        if (item % i === 0) return true
    }
    return item === 1
})

console.log(notPrime)

var isEven = numberArray.filter(value => value % 2 === 0);
console.log(isEven)

var myArray = [11, 34, 20, 5, 53, 16]

function findSquareOfNumbers(myArray) {
    return myArray.map(item => item * item)

}

console.log(findSquareOfNumbers(myArray))

var myArray1 = [2, 3, 5, 10]

function multiply(myArray1) {
    return myArray1.reduce((init, item) => init * item)
}

console.log(multiply(myArray1))

function combined(myArray1) {
    let combinedArray = myArray1.map(function (item) {
        return item * item
    }).reduce(function (init, item) {
        return init * item
    })
    return combinedArray
}

console.log(combined(myArray1))