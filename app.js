const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

var n1=1;
var n2=4;
modifiedFood=arrayslice(foods,n1,n2-1);
console.log(modifiedFood);

function arrayslice(array,x,y ){
 var newfood= array.splice(x,y);
 return newfood;
}

//Array Splice
const foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
var modifiedFoods=foods;
 modifiedfoods=foods.splice(1,0,"N00dles","icecream");
console.log(modifiedFoods);

//even nos
const numberArray = [12,324,213,4,2,3,45,4234];
let evennumbers=numberArray.filter(function(num){
if(num%2==0)
return num;

});
console.log(evennumbers);
//prime

const numberArray = [12,324,213,4,2,3,45,4234];
isprime(numberArray);
function isprime(numberArray){
 let numArray = numberArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);
}


//reject
const numberArray = [12,324,213,4,2,3,45,4234];
isnotprime(numberArray);
 function isnotprime(numberArray){
 let numArray = numberArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return true;
  }
  return false;

});


console.log(numArray);
}
//square
const numberArray = [12,324,213,4,2,3,45,4234];
square(numberArray);
function square(numberArray){
 
 numberArray= numberArray.map(x=>x**2);

console.log(numberArray);
}

//product
const numberArray = [12,324,213,4,2,3,45,4234];
multiply(numberArray);
function multiply(numberArray){
 
 numberArray= numberArray.reduce(function(total,amnt){
   return(total*amnt);
   
 });
console.log(numberArray);
}


