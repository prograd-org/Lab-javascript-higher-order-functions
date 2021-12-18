// Function 1:Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood=[];
modifiedFood.push(foods.slice(1,4));
console.log(modifiedFood);

// Function 2: Array Splice
const foods_1 = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
foods_1.splice(2,0,"noodles","icecream");
console.log(foods_1);

//Function:3 Filter
// even numbers
const numberArray = [12,324,213,4,2,3,45,4234];
const isEven = numberArray.filter(evenNum=>{
    return evenNum%2==0;
})
console.log(isEven);

// for prime numbers
const numberArray_1 = [12,324,213,4,2,3,45,4234];
const isPrime = numberArray_1.filter(num=>{
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num !== 1;
})
console.log(isPrime);

//Function:4 Reject
const numberArray_2 = [12,324,213,4,2,3,45,4234];
const nonPrime=numberArray_2.filter(Num=>{
    for (let i = 2; i < Num; i++) {
        if (Num % i === 0) return true;
      }
      return Num==0;
});
console.log(nonPrime);

//Function:5 Lambda

const numberArray1 = [12,324,213,4,2,3,45,4234];
const isEvenNum=numberArray1.filter(item=>(item%2)==0);
console.log(isEvenNum);

//Function:6 Map

const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers=myArray.map((number)=>number*number);
console.log(findSquareOfNumbers);

// Function #7: Reduce
myArray_1=[2, 3, 5, 10];
const multiply=myArray_1.reduce((first,second)=>first*second,1);
console.log(multiply)