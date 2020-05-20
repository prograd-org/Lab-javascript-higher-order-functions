
//1: Array Slice

const  foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

function sliceFood (foods, x, y){
    var modifiedFood = foods.slice(x,y);
    console.log(modifiedFood);
}

console.log(sliceFood(foods,1,4));


//2: Array Splice

foods.splice(1,0,'noodles','icecream');
console.log(foods);

//3. Filter

const numberArray = [12,324,213,4,2,3,45,4234];

function isPrime(arr){
    return arr.filter((number) => {
        for(let i =2 ; i<=Math.sqrt(number); i++){
            if(number % i === 0){
                return false;
            }

        }
        return true;
    });
}
console.log(isPrime(numberArray));

// 4. reject

function nonPrime(arr){
    return arr.filter((number) => {
        for(let i =2 ; i<=Math.sqrt(number); i++){
            if(number % i === 0){
                return true;
            }

        }
        return false;
    });
}
console.log(nonPrime(numberArray));

// 5. Lambda 
function isEven(n){
    return  (n % 2===0);
}

const lambda = numberArray.filter(isEven);
console.log(lambda);


// 6: Map
function findSquareOfNumbers(myArray) {
    return myArray.map(n => n * 2);
}
const myArray = [11, 34, 20, 5, 53, 16];
console.log(findSquareOfNumbers(myArray));


// 7: Reduce
var arr = [2, 3, 5, 10]

function multiply(arr) {
    return arr.reduce(function(a, b) {
        return a * b;
    }, 1);
}
console.log(multiply(arr));
