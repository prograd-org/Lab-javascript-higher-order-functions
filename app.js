//Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']

const slice = foods.slice(1,4);
console.log(slice);

// Function #2: Array Splice

const modifiedFood = foods.splice(2,0,'noodles', 'icecream');
console.log(foods);

//Function #3: Filter
const numberArray=[9,242,35,67,89,54,1226,80,19];

const arr2 = numberArray.filter(function isEven(item)
                     {
  if(item%2==0)
    return (item)
})
console.log(arr2);

const prime = numberArray.filter(function isPrime(item){
    for(let i=2;i<numberArray.length/2;i++)
    {
        if(item%i!=0)
        return item
    }
})
console.log(prime)

const prime1 = numberArray.filter(function isPrime(item){
    for(let i=2;i<item;i++)
    { flag=0;
        if(item%i==0)
         {flag++; break;}
    }     
        if(flag==0)
          return(item)
         
    
})
console.log(prime1)

// Function #4: Reject
let reject = (numberArray) => {
    let res = numberArray.filter((num) => {
      let i = num - 1,
        flag = false;
      while (i > 1) {
        if (num % i == 0) {
          flag = true;
          break;
        } else {
          i--;
        }
      }
      if (flag) {
        return num;
      }
    });
    return res;
  };
  let newarr = reject(numberArray);
  // console.log// Function #4: Reject

  //### Function #5: Lambda
  let even = numberArray.filter((num) => num % 2 == 0);
  // console.log(even);

  //### Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];

const arr = myArray.map(function findSquareOfNumbers(item){
    return (item*item);
  })

console.log(arr);

//### Function #7: Reduce
const myArray1=[2, 3, 5, 10]
const arr1 = myArray1.reduce(function multiply(total,item){
  return total*item
},1)
console.log(arr1)
