//progression -1

var food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = food.slice(0, food.length - 1);
console.log(modifiedFood);



//progression-2

var food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = food.splice(2, 0, "noodles", "icecream");
console.log(food);


//progression-3(part-1)

let numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(numberArray) {
    if ((numberArray & 1) == 0)
        return numberArray;
}
console.log(numberArray.filter(isEven));

//progression-3(part-2)

let numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isPrime(numberArray) {
    for (var i = 2; i <= Math.sqrt(numberArray); i++) {
        if (numberArray % 1 == 0)
            return false;
    }
    return true;
}
console.log(numberArray.filter(isPrime));

//progression-4

let numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isnonPrime(numberArray) {
    for (var i = 2; i <= Math.sqrt(numberArray); i++)

        return (numberArray % 1 == 0);

}
console.log(numberArray.filter(isnonPrime));

//progression-5(Rewriting progression 3 in lambda)

let numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let isEven = (numberArray) => {
    if ((numberArray & 1) == 0)
        return numberArray;
}
console.log(numberArray.filter(isEven));