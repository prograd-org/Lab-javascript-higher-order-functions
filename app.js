// Function #1: Array Slice
​
 var foods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
 let modifiedfoods = foods.slice(1, 4);
 console.log(modifiedfoods);
​
// Function #2: Array Splice
 var newfoods = ["pizza", "burger", "fingerchips", "donuts", "springroll"];
 newfoods.splice(2, 0, "icecream", "fingerchips");
 console.log(newfoods);
​
// Function #3: Filter
​
 const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
 let evennum = numberArray.filter(function(num) {
     return num % 2 == 0;
 });
 console.log(evennum);
​
// Function #4: Reject
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
let notp =[];
function notprime(numberArray)
{
    for(var i=0;i<numberArray.length;i++)
    {
       var item= numberArray[i];
       var count=0;
        for(var j=2;j<=item/2;j++)
      {
        if(item%j==0)
        count ++;
        
      }
        if(count!=0)
         notp.push(item);
    }
}
notprime(numberArray);
​
​
​
//## Function #5: Lambda
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
 let iseven;
 for(var i=0;i<numberArray.length;i++)
 {
      var n=numberArray[i];
      iseven = n =>  (n%2 == 0);
     
 }

// Function #6: Map
​
 const myArray = [11, 34, 20, 5, 53, 16];
 var squarednum = myArray.map(function(item) {
     return item * item;
 });
 console.log(squarednum);
​
​
// Function #7: Reduce
​
const myArray = [11, 34, 20, 5, 53, 16];
 var squarednum = myArray.map(function(item) {
     return item * item;
 });
 console.log(squarednum);
 let sum = squarednum.reduce(function(initial, item) {
     return initial + item;
 });
 console.log(sum);
​
// compressed code
 let summed = myArray.map(function (item) {
     return item * item
 }).reduce(function (initial, item) {
     initial + item;
    }, 0);
