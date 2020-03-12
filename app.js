

//#1 Array Slice

var foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

function slice_food(foods, x, y);
{

    var modifiedFood = foods.slice(x, y);
    console.log(modifiedFood);

}
console.log(slice_food(foods, 1, 3));


//#2: Array Splice
const foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

//#3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let even_num = numberArray.filter(function (num) {
    return num % 2 == 0;
});
console.log(even_num);


//#4: Reject
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let nonp = [];
function nonPrime(numberArray) {
    for (var i = 0; i < numberArray.length; i++) {
        var item = numberArray[i];
        var count = 0;
        for (var j = 2; j <= item / 2; j++) {
            if (item % j == 0)
                count++;

        }
        if (count != 0)
            nonp.push(item);
    }
}
nonPrime(numberArray);



//#6: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
    var newarray = myArray.map(myFunction());
}
function myFunction(num) {
    return num * num;
}

//#7: Reduce
var arr = [2, 3, 5, 10]
function multiply(arr) {
    arr.reduce(main());
}
function main(total, num) {
    return total * num;
}

