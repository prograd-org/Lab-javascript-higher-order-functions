![Image description](https://i1.faceprep.in/ProGrad/face-logo-resized.png)

# ProGrad Lab | Higher Order Function

Higher Order Functions are functions that take other functions as parameters, Sounds good!. 

Yeah! We are going to discover how these functions are useful through some examples.


## What should you do
```
Fork this repo
Clone this repo
Practice JavaScript - Higher order functions
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

## Tests

Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what should be done.

### Function #1: Array Slice

The `slice()` method returns the selected elements in an array, as a new array object. This method starts slicing the array by given start argument and ends at given second argument's before value.

Take an example array as
```
const foods = [pizza, burger, fingerShips, donuts, springRoll];

Expected output: [burger, fingerShips, donuts]
```
Create a new array named as `modifiedFood` and use `slice()` to get the above stated expected output.

### Function #2: Array Splice

The splice() method adds/removes items to/from an array, and returns the removed item(s).

Take an example of same array as
```
const foods = [pizza, burger, fingerShips, donuts, springRoll];

Expected output: [pizza, burger, noodles, icecream, fingerShips, donuts, springRoll];
```
Create a new array named as `modifiedFood` and use `splice()` to get the above stated expected output.

### Function #3: Filter

Filter is a method of arrays. It accepts as argument a test function which should return a boolean, and returns a new array with only the elements for which the test function returned true.

We've got some basic information about filter.  

Now, Create a function `isEven()` which takes `numberArray` as arguments and _returns all even numbers from the given array_.

```
Take numberArray as

const numberArray = [12,324,213,4,2,3,45,4234];
```

Next, Let's build this level by creating the functon called `isPrime()` with takes same `numberArray` as arguments and _returns all prime numbers from the above given array_.

### Function #4: Reject

We can now reuse the `isPrime()` function in conjunction with reject to get all the non-prime numbers in the array. The reject function is the opposite of the filter: it creates an array with all the elements but those that satisfy the condition.

Create a function `nonPrime()` which takes `numberArray` as arguments and _return all non-prime numbers from the above given array in Function #1_.

### Function #5: Lambda

When defining short functions, it's often convenient to use an alternative syntax called lambda function that allows us to define anonymous functions in a more compact way: _( /*arguments*/ ) => { /*code*/ }_. If our function is only a return statement, we can even strip the curly brackets and avoid writing return: _( /*arguments*/ ) => /*value to return*/_.

Let's rewrite the function `isEven()` by using the concept of Lambda Function.


### Function #6: Map

Another very useful higher order function is map: it takes a function and applies it to all the elements of an array.
The syntax is identical to `filter`

Let's create a function `findSquareOfNumbers()` which takes the following array called `myArray` as arguments and _returns power value of all elements in the given array_.

```
const myArray = [11, 34, 20, 5, 53, 16];
```

### Function #7: Reduce

Reduce is the last higher order function we are going to discuss and it's also the most powerful: in fact, you can implement any list transformation with reduce.

Reduce takes in a callback function and a starting value, the callback function takes as arguments an accumulator and the value of the current element of the array and returns the accumulator to be used in the next cycle. The value returned from the last call of the callback function is the value returned by `reduce`.

Create a function `multiply()` which takes an argument of `myArray` which holds the values as `[2, 3, 5, 10]` and _returns multiplication value of all numbers in the given array_.

Let's extend our knowledge by `implementing map with reduce`.

Take the function explained in the above task of `map` and try is by implementing the same by using `reduce`.



Happy Coding ProGrad ❤️
