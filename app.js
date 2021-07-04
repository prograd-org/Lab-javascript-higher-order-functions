//Function #1: Array Slice
var foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1,4);
console.log(modifiedFood);


//Function #2: Array Splice
var food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFoodsS = food.splice(2, 1, "noodles","icecream");
console.log(modifiedFood);

// Function #3: Filter
var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
isEven = numberArray.filter((item) => item % 2 == 0  );
console.log(isEven);


//Function #4: Lambda
var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
isEven = numberArray.filter((item) => item % 2 == 0  );
console.log(isEven);

//Function #5: Map
var myArray = [11, 34, 20, 5, 53, 16];
findSquareOfNumbers = myArray.map((item) => item * item);
console.log(findSquareOfNumbers);

//Function #6: Reduce
var myArray = [2, 3, 5, 10];
var multiply = myArray.reduce((init, item) => init * item , 1);
console.log(multiply);