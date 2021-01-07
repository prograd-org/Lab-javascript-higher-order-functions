const modifiedFood = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//1.Slicing on Array
function slice(foods){
    return foods.slice(1,4)
}
slice(modifiedFood)

//2.Splicing on Array
function splice(foods){
    foods.splice(2,1,"Chicken")
    return foods;
}
splice(modifiedFood)

//3.isEven
const numberArray = [12,324,213,4,2,3,45,4234];
function iseven(numberArray){
    return numberArray.filter(data=>data%2===0)

}
iseven(numberArray)
//4.PrimeNumber
function isPrime(numberArray){
    var prime=numberArray.filter(myfun)
    function myfun(data){
        if(data===2){
            return data;
        }else if(data!==0){
            for(i=2;i<data;i++){
                if(data%i===0){
                    break;
            return data;
                    
                }
            }
        }
    }
    return prime
}
isPrime(numberArray)

//5.Nonprime
function nonPrime(numberArray){
    var nonprime=numberArray.map(myfun)
    return nonprime.filter(data=>{
      return typeof(data)=="number";
    })
    function myfun(data){
        if(data===0 || data===1){
            return data;
        }else if(data!==2 && data!==3){
            for(i=2;i<data;i++){
                if(data%i===0){
                    return data
                   }
            }
        } 
}
nonPrime(numberArray)

//6.Lambda for even Numbers
var lambda=function(array){
    var value=[]
    for(var x of array){
        if(x%2===0){
            value.push(x)
        }
    }
    return value;
}
return lambda(numberArray)

//7.square value of numbers using map
function findSquareOfNumbers(array){
     return array.map(data=>data*data)
}
findSquareOfNumbers(numberArray)

//reduce function
function multiply(numberArray){
      return numberArray.reduce((total,data)=>total*data)
}
multiply(numberArray)