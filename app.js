//Function #1 Array slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood=foods.slice(1,4);
console.log(modifiedFood);

//Function #2 Array splice

const food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
food.splice(2, 0,"noodles","icecream");
console.log(food);

//Function #3 Filter

const numberArray = [12,324,213,4,2,3,45,4234];
var evenarray = numberArray.filter((item) => item % 2 == 0);
console.log(evenarray);

//Function #4 Lambda

const numbArray = [12,324,213,4,2,3,45,4234];
var even = numbArray.filter((item) => item % 2 == 0);
console.log(even);

//Function #5 Map

const myArray = [11, 34, 20, 5, 53, 16];
let squareofNumbers = myArray.map(function(item){
    return item*item;
});
console.log(squareofNumbers);

//Function #6 Reduce

let myArr = [2,3,5,10]
let multiplication = myArr.reduce(function(initial,item){
    return initial*item;
},1);
console.log(multiplication);
