//Function 1:
var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];


let modifiedFood = foods.slice(1, 4)
console.log(modifiedFood)

//Function 2:
var modifiedfoods = foods.splice(1, 0, "noodles", "icecream");
console.log(foods)


//Function 3:
let numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let even = numberArray.filter(function (isEven) {
    return isEven % 2 == 0;

});

console.log(even)



let prime = numberArray.filter(function (isPrime) {
    for (var i = 2; i <= Math.sqrt(isPrime); i++) {
        if (isPrime % i === 0)
            return false;

    }
    return true;
});
console.log(prime)

//Function 4
let non_prime = numberArray.filter(function (nPrime) {
    for (var i = 2; i <= Math.sqrt(nPrime); i++) {
        if (nPrime % i === 0)
            return true;

    }
    return false;
});
console.log(non_prime)

//Function 5
let isEven = function (n) {
    return n.filter((n) => n % 2 == 0)
};
console.log(isEven(numberArray));

//Function 6
const myArray = [11, 34, 20, 5, 53, 16];

let findAquareOfNumbers = myArray.map(function (sq) {
    return sq * sq
});

console.log(findAquareOfNumbers)

//function reduce
let mArray = [2, 3, 5, 10]

let multiply = mArray.reduce(function (acc, mult) {
    return acc * mult
})

console.log(multiply)