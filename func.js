function slice() {
   const foods = ['pizza','burger','fingerChips','donuts','springRoll','Sandwich','HotDog','Pancake'];
   var num1 = parseInt(document.getElementById("n1").value);
   var num2 = parseInt(document.getElementById("n2").value);
   var modifiedFood = [];
   if(num1>=0 && num1<=7 && num2>=1 && num2<=8){
      for(let i=num1;i<num2;i++){
        modifiedFood.push(foods[i]);
      }
      document.getElementById("out1").innerText = "modifiedFood = ["+modifiedFood+"]";
   }
   else{
      document.getElementById("out1").innerText = "Value out of array index! Please enter again.";  
   }
   
   return modifiedFood
}

function Addsplice() {
    const foods = ['pizza','burger','fingerChips','donuts','springRoll'];
    var num1 = parseInt(document.getElementById("n3").value);
    var value = document.getElementById("n4").value;
    var modifiedFood = [];
    if(num1>=0 && num1<=4){
        let i;
        for(i=0;i<num1;i++){
            modifiedFood.push(foods[i]);
        }
        modifiedFood.push(value);
        for(;i<foods.length;i++){
            modifiedFood.push(foods[i]);
        }
        document.getElementById("out2").innerText = "modifiedFood = ["+modifiedFood+"]";
    }
    else{
        document.getElementById("out2").innerText = "Value out of array index! Please enter again.";  
    }
    return modifiedFood;
}

function isEven(){
    const numberArray = [12,324,213,4,2,3,45,4234];
    function checkEven(num){
        return num%2==0;
    }
    var res = numberArray.filter(checkEven);
    document.getElementById("out3").innerText = "evennumberArray = ["+res+"]";
    return res;
}

function isprime(){
    const numberArray = [12,324,213,4,2,3,45,4234];
    var notprime = [];
    for(let i=0;i<numberArray.length;i++){
       let j;
       for(j=2;j<numberArray[i];j++){
           if(numberArray[i]%j==0){
               break;
           }
       }
       if(j==numberArray[i]){
           notprime.push(numberArray[i]);
       }
    }
    document.getElementById("out4").innerText = "Notprime = ["+notprime+"]";
    return notprime;
}

function checkEven(){
    const numberArray = [12,324,213,4,2,3,45,4234];
    var res = numberArray.filter(value => value%2==0);
    document.getElementById("out5").innerText = "evennumberArray = ["+res+"]";
    return res;
}

function findSquare(){
    const myArray = [11, 34, 20, 5, 53, 16];
    let output = myArray.map(function(ele){
        return ele*ele;
    })
    document.getElementById("out6").innerText = "SquareofArray = ["+output+"]";
    return output;
}

function multiply(){
    const myArray = [2, 3, 5, 10];
    let mul = myArray.reduce(function(mul,ele){
      return mul*ele;
    },1)
    document.getElementById("out7").innerText = "Multiply Value = "+mul;
    return mul;
}
