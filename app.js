//Array Slice
function arraySlice()
{
    const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
    const modifiedFood = foods.slice(1,4);
    document.write(modifiedFood);
    console.log(modifiedFood);
}
arraySlice();

//Array Splice
function arraySplice()
{
    const foods = ['pizza', 'burger', 'fingerShips', 'donuts', 'springRoll'];
    const modifiedFood = foods.splice(2,0,"noodles","icecream");
    document.write(foods);
    console.log(foods);
    
}
arraySplice();

//Filter 
//i. Even
var numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray) {
    return numberArray % 2 == 0;
  }
var filtereven = numberArray.filter(isEven);
console.log(filtereven);
//ii. Prime
function isPrime(numberArray) {
    for(let i=2; i<numberArray; i++){
        if(numberArray % i == 0){
            return false;
        }
    }
    return numberArray>1;
}
var filterprime = numberArray.filter(isPrime);
console.log(filterprime);

//Lambda Function
var numberArray = [12,324,213,4,2,3,45,4234];
var isEven = () => {
    even = numberArray.filter( numberArray => numberArray % 2==0);
}
isEven();
console.log(even);

//Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
    return myArray*myArray;
}
const square = myArray.map(findSquareOfNumbers)
console.log(square)

//Reduce
const myarray = [2, 3, 5, 10];
const result = myarray.reduce(function(initial,item){
    return initial*item;
},1)
console.log(result)
