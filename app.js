var modifiedFood=['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
console.log(modifiedFood.slice(1,4));
//var modifiedFood1=['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
//console.log( modifiedFood1.splice(2,0,"noodles" ,"icecream"))
modifiedFood.splice(2,0,"noodles" ,"icecream");
console.log(modifiedFood)


const numberArray = [12,324,213,4,2,3,45,4234];

var b=numberArray.filter(isEven);
console.log(b)

function isEven(numberArray)
{
return numberArray%2==0;
}

var c=numberArray.filter(isPrime);
console.log("prime numbers are"+" " + [c])

function isPrime(numberArray)
{
    for(i=2;i<=numberArray/2;i++){
        if(numberArray%i==0)
        {
            return false;
        }
        

    }
    return true;

}


var d=numberArray.filter(noPrime)
console.log("none prim numbers are" +" "+ d)
function noPrime(numberArray)
{
    for(i=2;i<=numberArray/2;i++){
        if(numberArray%i==0)
        {
            return true;
        }
        
}
return false;
}



var even=numberArray.filter((e)=>{return e%2==0});
 console.log("even no by using lamda function is" + " " +even)

 const myArray = [11, 34, 20, 5, 53, 16];
 var f=myArray.map(findSquareOfNumbers)
 console.log("square no of each elements are " + " "+f)

function findSquareOfNumbers(myArray){
    return myArray*myArray;

}




var myarr=[2, 3, 5, 10]
var mul=myarr.reduce((mul,num)=>mul*num)
console.log(mul)