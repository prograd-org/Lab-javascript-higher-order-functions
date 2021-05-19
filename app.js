const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
function  Array_Slice(foods){
var modifiedFood=[...foods.slice(1,4)];
  return modifiedFood;
}
console.log(Array_Slice(foods))
function  Array_Splice(foods){
    foods.splice(2,0,'noodles', 'icecream');
      return foods;
    }
    console.log(Array_Splice(foods))
const numberArray = [12,324,213,4,2,3,45,4234]
function isEven(numberArray){
 return numberArray.filter(numarr=> !(numarr&1))
}
console.log(isEven(numberArray));
function isPrime(numberArray){
let ele=[] 
numberArray.forEach((element,index) => {
    if(element==2 || element==3 || element==5 || element==7 || element==11)
    {ele.push(element)}
    else if((element%2)!=0 &&(element%3)!=0 &&(element%5)!=0 &&(element%7)!=0 &&(element%11)!=0)
      ele.push(element); 
  }); 
  return ele; 
}
console.log(isPrime(numberArray));
function nonPrime(numberArray){
  let ele=[] 
numberArray.forEach((element,index) => {
    if(element==2 || element==3 || element==5 || element==7 || element==11)
    {}
    else if((element%2)==0 || (element%3)==0 || (element%5)==00 || (element%7)==0 || (element%11)==0)
      ele.push(element); 
  }); 
  return ele; 
}
console.log(nonPrime(numberArray))
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){ return myArray.map(arr=> arr*arr)}
console.log(findSquareOfNumbers(myArray))
const myarray=[2,3,5,10]
function multiply(myarray){
  return myarray.reduce((a,b)=> a*b)
}
console.log(multiply(myarray))

