const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1,4)
console.log(modifiedFood);
modifiedFood = foods
modifiedFood.splice(2, 0, "noodles", "icecream")
console.log(modifiedFood);

const numberArray = [12,324,213,4,2,3,45,4234];


function isEven(arr){
    evenNumArray = arr.filter((number)=>{
        return number%2 == 0;
    })
    return evenNumArray;
}

console.log(isEven(numberArray));

function isPrime(arr){
    primeNumArray = arr.filter((number)=>{
        var flag = true;
        for(var i = 2; i < number -1; i++){
            if(number%i == 0) flag = false;
            break;
        }
        if(flag) return number;
    })
    return primeNumArray;
}

console.log(isPrime(numberArray));

function notPrime(arr){
    primeNumArray = arr.filter((number)=>{
        for(var i = 2; i < number -1; i++){
            if(number%i == 0) return number;
            break;
        }
    })
    return primeNumArray;
}

console.log(notPrime(numberArray))

isEven = (arr)=>{
    evenNumArray = arr.filter((number)=>{
        return number%2 == 0;
    })
    return evenNumArray;
}

console.log(isEven(numberArray))

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(arr){
    return arr.map(item=>{
        return item**2;
    })
}

console.log(findSquareOfNumbers(myArray))
const myArray1 = [2, 3, 5, 10];

function multiply(arr){
    var result = 1;
    arr.map(item=>{
        return result * item;
    })
    return result;
}

console.log(multiply(myArray1))

function multiply(arr){
    return arr.reduce((result, item)=>{return result * item; }, 1);
}

console.log(multiply(myArray1))