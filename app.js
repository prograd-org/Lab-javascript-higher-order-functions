//1.Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood = foods.slice(1, 4);
document.write(modifiedFood);

//2.Array Splice

const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

foods1.splice(4, 0, "fingerShips", "donuts");

console.log(foods1);

//3.Filter


const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

const arr = numberArray.filter(num => num % 2 == 0);

console.log(arr);

//4.Reject

var numArray = [12, 324, 213, 4, 2, 3, 45, 4234];


function nonPrime(numberArray){
    return numberArray.filter((number) => {
        for(let i =2 ; i<=Math.sqrt(number); i++){
            if(number % i === 0){
                return true;
            }

        }
        return false;
    });
}
console.log(nonPrime(numberArray));


//5.Lambda

function isEven(n){
    return  (n % 2===0);
}

const lambda = numberArray.filter(isEven);
console.log(lambda);


//6. Map


const myArray = [11, 34, 20, 5, 53, 16];

var x = myArray.map(x => x * x);

console.log(x);

//7. Reduce

var arr = [2, 3, 5, 10]


function multiply(myArray) {
    return myArray.reduce(function(a, b) {
        return a * b;
    }, 1);
}
console.log(multiply(myArray));
