// 1. Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll", "shawrarma", "schezwan roll"];
var modifiedfood = foods.slice(1, 4); //sends elements starting from 1 till 4( 4 is exclusive) to midified
console.log(modifiedfood);
// console.log(foods.slice(1, 4)); //sends elements starting from 1 till 4( 4 is exclusive) to midified

// var modifiedfood2 = foods.splice(1, 4); //sends elements starting from 1 to 4 to modifiedfood2
// console.log(modifiedfood2);
// console.log(foods.splice(1, 4)); //prints elements after 4

//2. Splice

var foodsforsplice = foods;
//foodsforsplice.splice(2, 0, "noodles", "icecream")
console.log(foodsforsplice);
foodsforsplice.splice(2, 0, "noodles", "icecream");
console.log(foodsforsplice);
//console.log(foods);


//3. Filter
const NumberArray = [12, 324, 213, 4, 2, 3, 31, 45, 4234];
// var even = NumberArray.filter(ele => ele % 2 == 0);
// console.log(even);

//var b = isEven(NumberArray);

// function isEven(num) {
//     num.filter(function (ele) {
//         if (ele % 2 == 0)
//             return ele;
//     });
// }
//var b = isEven(NumberArray);
function isEven(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}

// var evennumbers = NumberArray.filter(function (ele) {
//     return isEven(ele);
// });

// var evennumbers = NumberArray.filter(ele => isEven(ele));

var evennumbers = NumberArray.filter(isEven);
console.log(evennumbers);

function isPrime(num) {
    var count = 0;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            count++;
    }
    if (count == 0)
        return true;
    else
        return false;
}
var primenumbers = NumberArray.filter(isPrime);
console.log(primenumbers);

//reject
function isNonPrime(num) {
    var count = 0;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            count++;
    }
    if (count == 0)
        return false;
    else
        return true;
}

var compositenumbers = NumberArray.filter(isNonPrime);
console.log(compositenumbers);

//5.Lambda
var evenlambda = NumberArray.filter(ele => ele % 2 == 0);
console.log(evenlambda);

//6. Map
const myArray = [11, 34, 20, 5, 53, 16];
var squarednums = myArray.map(ele => ele * ele);
console.log(squarednums);

//7. Reduce
const myArraymul = [2, 3, 5, 10];
// var multipliednum = myArraymul.reduce((mul, a) => mul * a);


//8 Mulitply/Reduce
// function multiply(myArraymul) {
//     var mul = 1;
//     for (var i = 0; i < myArraymul.length; i++)
//         mul *= myArraymul[i];

//     return mul;
// }
// var multipliednum = myArraymul.reduce(multiply);

function multiply(myArray) {
    return myArray.reduce((mul, num) => mul * num);
}
console.log(multiply(myArraymul));