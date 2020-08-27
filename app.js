const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];

function slice(arr) {

    modifiedFood = arr.slice(1, 4)
    return modifiedFood;
}
modifiedFood = slice(foods);
document.write(modifiedFood, "</br>");


function splice(arr) {
    modifiedFood = arr.splice(2, 0, "noodles", "icecream");
    document.write(arr, "</br>");
}

splice(foods);



const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];



function isEven(numberArray) {
    let even = numberArray.filter(function (num) {
        return (num % 2 == 0)
    });
    document.write(even, "</br>")
}
isEven(numberArray)



function isPrime(numberArray) {
    var prime = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    document.write(prime, "</br>")
}
isPrime(numberArray);



function nonPrime(numberArray) {
    var nonprime = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0)
                return number;
        }
    });
    document.write(nonprime + "<br>")
}
nonPrime(numberArray)



let isEvenbyLamba = (noArr) => {
    return noArr.filter((item) => item % 2 == 0)
}
document.write(isEvenbyLamba(numberArray), "<br>");



const myArray = [11, 34, 20, 5, 53, 16];

let findSquareOfNumbers = (myArray) => {
    return myArray.map((item) => item * item)
}
document.write(findSquareOfNumbers(myArray), "<br>");




const myArray2 = [2, 3, 5, 10];

function multiply(myArray) {
    return myArray.reduce((item, init) => init * item);
}
document.write("reduce", multiply(myArray2), "<br>");