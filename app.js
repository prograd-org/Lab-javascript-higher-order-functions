// Function #1: Array Slice

// creating new array modifiedFood and returning 
const modifiedFood =["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const ans = modifiedFood.slice(1,4)
console.log(ans);



// Function #2: Array Splice
const modifiedFood =["pizza", "burger", "fingerChips", "donuts", "springRoll"];
modifiedFood.splice(1,0,"Subway");
// inserts at index 1
console.log(modifiedFood);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

modifiedFood.splice(4, 1, "Toberlone");
// replaces 1 element at index 4
console.log(modifiedFood);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]



// Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234,23,17];

const even = numberArray.filter(isEven = (x) => {
        return x%2==0;
})

console.log(even);

// Prime function using filter
const prime = numberArray.filter(isPrime = (x) =>{
    let i,flag;
    flag=1;
    for(i=2;i<=x/2;i++){
        if(x%i==0)
            flag=0;
    }
    if(flag==1)
        return x;
})

console.log(prime);



// Function #4: Reject
const numberArray = [12,324,213,4,2,3,45,4234,23,17];

const notprime = numberArray.filter(nonPrime = (x) =>{
    let i,flag;
    flag=1;
    for(i=2;i*i<=x;i++){
        if(x%i==0)
            flag=0;
    }
    if(flag==0)
        return x;
})

console.log(notprime);



// Function #5: Lambda
const numberArray = [12,324,213,4,2,3,45,4234,23,17];

const even = numberArray.filter( (x) => {
        return x%2==0;
})
console.log(even)

// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const newArray = functionmyArray.map(Math.sqrt);

console.log(newArray);

// Function #7: Reduce
const myArray = [2,3,5,10];
const multiply = (currentVal) => currentVal*3;

console.log(myArray.reduce(multiply));