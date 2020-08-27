//Function #1: Array Slice

const modifiedFood = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
function slice(modifiedFood)
{
    document.write(modifiedFood.slice(1,4)+"<br>")
}
slice(modifiedFood)

// Function #2: Array Splice

function splice(modifiedFood)
{
    modifiedFood.splice(2,0,"noodels","icecream")
    document.write(modifiedFood+"<br>")
}
splice(modifiedFood)

//Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArray)
{
    let even=numberArray.filter(function(num){
        return (num%2==0)
    });
    document.write(even +"<br>")
}
//### Function #3: Filter
isEven(numberArray)

//Prime
function isPrime(numberArray) {
    var prime= numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    document.write(prime +"<br>")
}

isPrime(numberArray);

//### Function #4: Reject
function nonPrime(numberArray)
{
    var nonprime = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) 
            return number;
        }
    }); 
    document.write(nonprime+"<br>")
}
nonPrime(numberArray)

//### Function #5: Lambda
function iseven(numberArray)
{
    var labdaEven = numberArray.filter(num => num%2==0);
    document.write(labdaEven+"<br>")
}
iseven(numberArray)

//### Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray)
{
    var square=myArray.map(function(item){
        return(item*item)
    });
    document.write(square+"<br>")
}
findSquareOfNumbers(myArray)

//### Function #7: Reduce
const myArray1 = [2, 3, 5, 10];
function multiply(myArray1 )
{
    var multiplyNo=myArray1.reduce(function(initial,item)
    {
        return initial*item
    },1);
    document.write(multiplyNo)
}
multiply(myArray1)