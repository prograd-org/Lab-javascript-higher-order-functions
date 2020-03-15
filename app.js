const modifiedFood = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

function slice(array, a, b) {
  array.splice(a, b - 1);
  console.log(modifiedFood);
}

modifiedFood.splice(2, 0, "noodles", "icecream");

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let primeNumArray = numberArray.filter(function isPrime(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 2; j < array[i] / 2; j++) {
      if (array[i] % i == 0) {
        return array[i];
      }
    }
  }
});

const isEven = num => num % 2 == 0;

function square(array) {
  return array.map(function(item) {
    return item * item;
  });
}

function multiply(array) {
  return array.reduce(function(initial, items) {
    return initial * items;
  }, 1);
}
