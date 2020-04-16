//progression -1

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, foods.length - 1);
console.log(modifiedFood);



//progression-2

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods.splice(2, 0, "noodles", "icecream");
console.log(foods);


//progression-3(part-1)

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(numberArray) {
    if ((numberArray & 1) == 0)
        return true;
}
console.log(numberArray.filter(isEven));




// for odd number  if((numberArray & 1)==1)


//progression-3(part-2)

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isPrime(numberArray) {
    for (var i = 2; i <= Math.sqrt(numberArray); i++) {
        if (numberArray % i == 0)
            return false;
    }
    return true;
}
console.log(numberArray.filter(isPrime));

//progression-4


const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isNonPrime(numberArray) {
    for (var i = 2; i <= Math.sqrt(numberArray); i++) {
        if (numberArray % i == 0)
            return true;
    }
    return false;
}
console.log(numberArray.filter(isNonPrime));




//progression-5(Rewriting progression 3 in lambda)

let numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let isEven = numberArray => {
    if ((numberArray & 1) == 0)
        return true;
}
console.log(numberArray.filter(isEven));