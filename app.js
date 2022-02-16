// Array
const foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

//#1 Array Slice
function slice_food(foods,x,y)
{
var modifitem1   = foods.slice(x,y);
console.log(modifitem1);
}
slice_food(foods,1,4);


//#2: Array Splice
function splice_food(foods,x,y)
{
    foods.splice(x,y,"noodles","icecream");
    console.log(foods);
}
splice_food(foods,2,0);


//#3: Filter
const numberArray= [12,324,213,4,2,3,45,4234];
 let isEven = (numberArray) => {
   var even=numberArray.filter(item => {
     return item % 2== 0;
   });
   console.log(even);
}; 
isEven(numberArray);
 let prime = (numberArray) =>{
   let p =numberArray.filter(data => {
     for(var i=2;i<=Math.sqrt(data);i++)
     {
       if(data % i == 0)
       {
         return false;
       }
      }
       return true;
   });
   console.log(p);
};
prime(numberArray);


//#4: Reject
function reject(numberArray) 
{
    let nonprime = numberArray.filter((number) => 
    {
      for (var i = 2; i <= Math.sqrt(number); i++) 
      {
        if (number % i == 0) 
        return true;
      }
      return false;
    });
    console.log(nonprime);
}
reject(numberArray);


//#5: Lambda
let e = numberArray.filter(data=> data % 2==0);
console.log(e);


//#6: Map
const arr1 = [11, 34, 20, 5, 53, 16];
var newarray =arr1.map(function(data){return data*data;});
console.log(newarray);

  
//#7: Reduce
var myArray = [2, 3, 5, 10];
var mul=myArray.reduce(function(i,d){return i*d;});
console.log(mul);