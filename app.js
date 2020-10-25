const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modified_food = food(foods);
console.log(modified_food);

function food(selected_food) {
    var selected_food = foods.slice(1, 4);
    return selected_food;
}

// ### Function #2: Array Splice
const chat = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
splice(chat);

function splice(split) {
    split.splice(2, 0, "noodles", "icecream");
    console.log(split);
}

// ### Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
// evennum(numberArray);
let evennum = numberArray.filter(function(num) {
    return num % 2 == 0;
});
console.log("even numbers are " + evennum);
// let primenum=numberArray.filter(function(isprime){})
// let flag=0;
// // console.log(isprime);
// for(let i=1;i<=isprime;i++);
// {
//     if(isprime%i==0)
//     flag=flag+1;
// }
// if(flag==2)
// {
//     return prime;
// }

// ### Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
var findSquareOfNumbers = myArray.map(function(item) {
    return (Math.sqrt(item));
});
console.log(findSquareOfNumbers);

// ### Function #5: Lambda
const numArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var value = numArray.filter(value => value % 2 == 0);
console.log(value);

// ### Function #7: Reduce

const myarrayfunc = [2, 3, 5, 10];
var res = myarrayfunc.reduce(function(initial, item) {
    return initial * item;
}, 1);
console.log(res);

// map replace reduce
const myarray = [11, 34, 20, 5, 53, 16];
var findSquareOfNumbers = myarray.reduce(function(item) {
    return (Math.sqrt(item));
});
console.log(findSquareOfNumbers);