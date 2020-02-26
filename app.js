//Function 1
var food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

function slicer(food,x,y)
{

var modifiedFood   = food.slice(x,y);
console.log(modifiedFood);

}
console.log(slicer(food,1,3));

//Function 2
var food2 = [pizza, burger, fingerShips, donuts, springRoll];

function splicer(food, x, y) {
    var modifiedFood = food.splice(x,y, "Noodle", "Ice Cream" );
    console.log(modifiedFood);
}
splicer(food2, 2, 0 );

//Function 3
var numberArray = [12,324,213,4,2,3,45,4234];

var isEven = () => {
    return numberArray.filter = (number => {
        return number % 2 == 0;
    });
}
console.log(isEven());

//Function 4
var arr = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(arr) {
    var arr2 = arr.map(functn)
}
function functn(num) {
    return num * num; 
}

//Function 5
var array = [2, 3, 6, 10]
function multiply(array) {
    var newarray = array.reduce(redc)
}
function main(t, num) {
    return total * num;
}


