// slice method
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood=foods.slice(1,4) 
console.log(modifiedFood)  

//splice method

foods.splice(2,0,"noodles", "icecream")
var modifiedFood2=[...foods]
console.log(modifiedFood2)

// finding even elements

const numberArray = [1,12,324,213,4,2,3,45,4234];
var result=numberArray.filter(item=> (item&1)===0)
console.log(result)


// finding  prime numbers

let isPrime=arrayElements=>{
    let result=arrayElements.filter(item=>{
        if(item===1)
        return false
        for(let number=2;number<item;number++){
            if(item%number===0)
             return false
        }
        return true
    })
    return result
}
console.log(isPrime(numberArray))

//finding non prime numbers

let nonPrime=arrayElements=>{
    let result=arrayElements.filter(item=>{
        if(item===1)
        return true
        for(let number=2;number<item;number++){
            if(item%number===0)
              return true
        }
        return false
    })
    return result
}
console.log(nonPrime(numberArray))

//finding squares of elements

const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers=myArray=>{
let squaresOfArrayElements=myArray.map(item=>item*item)
return squaresOfArrayElements
}
console.log(findSquareOfNumbers(myArray))

//finding multiplied value of all the elements in the array

const arrayElements=[2,3,5,10]
let multiply=(arrayElements)=>{
    let result=arrayElements.reduce((initial,current)=>initial*current,1)
    return result
}
console.log(multiply(arrayElements))

// finding multiplication of squares of array elements

let productOfSquaresOfArrayElements=myArray=>{
  let result=myArray.map(item=>item*item).reduce((initial,current)=>initial*current,1)
  return result
}
console.log(productOfSquaresOfArrayElements(myArray))
