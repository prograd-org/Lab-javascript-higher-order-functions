// Array slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1,-1);
document.writeln(modifiedFood + "<br>");

//Array Splice
let snack = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
snack.splice(2, 0, "noodles","icecream");
document.writeln(snack+ "<br>");

//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray){
    let ev = numberArray.filter(function(num)
    {
     if(num%2==0){
        return num;
     }  
    });
    document.writeln(ev + "<br>");
}
isEven(numberArray);

//Function #3 : Filter prime
function isPrime(numberArray){
     prime = numberArray.filter((number) => {
        for (var i = 2; i <= number/2; i++) {
          if (number % i === 0) {
            return false;
          }
        }
        return true;
      });
    document.writeln(prime + "<br>");
}
isPrime(numberArray);

//Function #4: reject
function nonPrime(numberArray){
    var nonprime =numberArray.filter(i => (isprime(i)==false))
    document.writeln(nonprime + "<br>");
}
nonPrime(numberArray);

//Function #4: Lambda
function sEven(numberArray){
    evn = numberArray.filter(value => value % 2 === 0);
    document.writeln(evn + "<br>");
}
sEven(numberArray);

//.........MAP
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
    let sq = myArray.map(function(item,index,array){
        return item*item;
    });
    document.writeln(sq + "<br>");
}
findSquareOfNumbers(myArray);

//..............reduce
var arr = [2, 3, 5, 10];
function multiply(arr){
    let mul = arr.reduce(function(init,item){
        return init * item;
    });
    document.writeln(mul + "<br>");
    console.log(mul);
}
multiply(arr);