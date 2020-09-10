document.write("progresion1");
document.write("<br>");
document.write("<br>");
document.write("<br>");

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];


let modifiedFood = foods.slice(1, 4);
document.write(modifiedFood);


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("progresion2");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

foods1.splice(4, 0, "fingerShips", "donuts");

document.write(foods1);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("progresion3");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

const arr = numberArray.filter(num => num % 2 == 0);

document.write(arr);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("progresion4");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

var numArray = [12, 324, 213, 4, 2, 3, 45, 4234];

numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
});

document.write(numArray);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("progresion5");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

var numArray = [12, 324, 213, 4, 2, 3, 45, 4234];

var isEven = numArray.filter(value => value % 2 == 0);


document.write(isEven + "need clear explanation of lamda");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("progresion6");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

const myArray = [11, 34, 20, 5, 53, 16];

var x = myArray.map(x => x * x);

document.write(x);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("progresion7");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

let arr2 = [2, 3, 5, 10];

let total = arr2.reduce((a, b) => a * b);

document.write(total);