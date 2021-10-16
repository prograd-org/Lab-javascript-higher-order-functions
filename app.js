//Function:1 Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood=foods.slice(1,4);
console.log(modifiedFood);

//Function:2 Array Splice

const foods1 = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods1.splice(2,0,"noodles","icecream");
console.log(foods1);

//Function:3 Filter

const numberArray = [12,324,213,4,2,3,45,4234];
const evenNumber=numberArray.filter ((item)=>{
    return (item%2)==0;
});
console.log(evenNumber);
//prime
const numberArray2 = [12,324,213,4,2,3,45,4234];
const isPrime=numberArray2.filter(num=>{
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num !== 1;
});
console.log(isPrime);

//Function:4 Reject
const numberArray3 = [12,324,213,4,2,3,45,4234];
const nonPrime=numberArray3.filter(num=>{
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return true;
      }
      return num == 0;
});
console.log(nonPrime);

//Function:5 Lambda

const numberArray1 = [12,324,213,4,2,3,45,4234];
const isEven=numberArray1.filter((item)=>(item%2)==0);
console.log(isEven);

//Function:6 Map

const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers=myArray.map((item)=>{
    return item*item;
});
console.log(findSquareOfNumbers);

//Function:7 Reduce

myArray1=[2, 3, 5, 10];
const multiply=myArray1.reduce(function(initial,item){
    return initial*item;
},1);
console.log(multiply);