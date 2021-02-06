const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);
var modifiedfood2 = foods.splice(2, 0, "noodles", "icecream");
console.log(foods);
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

function isEven(arr) {
    return arr.filter(items =>
        items % 2 === 0
    );

}

function isPrime(arr) {
    var list = [];
    arr.filter(items => {

        var flag = false;
        if (items > 2) {
            for (let i = 2; i < items; i++) {
                if (items % i == 0) {
                    flag = true;
                }
            }
        }
        if (flag == false) {
            list.push(items)
        }
    });
    return list;
}
console.log(isEven(numberArray));
console.log(isPrime(numberArray));
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(arr) {
    return arr.map(items =>
        items * items
    );
}
console.log(findSquareOfNumbers(myArray));
const arr1 = [1, 2, 3];

function multiply(arr) { return arr.reduce((a, b) => a * b, 1); }
console.log(multiply(arr1));