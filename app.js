//The below code slice the array with help of slice() function
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']
console.log(foods.slice(1, 4))

//The below code delete an element from the array and replaces it with multiple elements
// with help of splice() function
const foodsModify = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']
foodsModify.splice(2, 0, 'noodles', 'icecream')
console.log(foodsModify)


//The below code find the even number in the array
//with the help of filter() function
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234, 5];
let isEven = (arr) => console.log(arr.filter(num => num % 2 == 0))
isEven(numberArray)

//The below code find the prime number in the array
//with the help of filter() function

let isPrime = (arr) => {
    console.log(arr.filter(num => {
        let count = 0
        for (let i = 2; i <= num; i++) {
            if (num % i == 0) {
                count += 1
            }
        }
        return count == 1
    }))
}

isPrime(numberArray)

numberArray => console.log(numberArray.filter(num => num % 2 == 0))


//The below code find the square number of the elements in the array
//with the help of map() function
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = (arr) => console.log(arr.map(num => num ** 2))
findSquareOfNumbers(myArray)

//The below code reduces the array elements by multiplying them with each other
//with the help of reduce() function
const myNumber = [2, 3, 5, 10]
let multiply = (arr) => console.log(arr.reduce((accumulator, num) => accumulator * num, 1))
multiply(myNumber)