// 
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood=[];
function slice(items)
{
    let modifiedFood=items.slice(1,4);
    return modifiedFood;
}
modifiedFood=slice(foods);
console.log(modifiedFood);

//Function #2: Array Splice
function splice(arr)
{
    arr.splice(2,0,"noodles","icecream");
    return arr;
}
console.log(splice(foods));

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
let isEven = numberArray.filter(items => items%2 == 0);
console.log(isEven);

let isPrime=numberArray.filter(item =>
{
    let flag=1;
    for(i=2;i<=item/2;i++)
    {
        if(item%i==0)
        {
            flag=0;
        }
    }
    if(flag==1)
    {
        return item;
    }
});
console.log(isPrime);
//Function #4: Reject
let notPrime=numberArray.filter(item =>
    {
        let flag=1;
        for(i=2;i<=item/2;i++)
        {
            if(item%i==0)
            {
                flag=0;
            }
        }
        if(flag==0)
        {
            return item;
        }
    });
console.log(notPrime);

// Function #5: Lambda
let isEven1 = numberArray.filter(item => item%2==0);
console.log(isEven1);

//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map(items=>items*items);
console.log(findSquareOfNumbers);

//Function #7: Reduce
const myarray=[2, 3, 5, 10];
let multiply=myarray.reduce((initial,item)=>
{
    return initial*item;
},1);
console.log(multiply);