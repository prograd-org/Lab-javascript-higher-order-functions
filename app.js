const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood= [...foods];
modifiedFood.splice(1,modifiedFood.length-2);
console.log(modifiedFood)

var modifiedFood= [...foods];
modifiedFood.splice(2,0,"noodles","icecream")
console.log(modifiedFood)


const numberArray = [12,13,324,213,4,2,3,45,4234];
var res=numberArray.filter((num)=>num%2==0)
console.log(res);

let isPrime=(numberArray)=>{
    let res=numberArray.filter((num)=>{
        if(num==2||num==1)
        {
            return num;

        }
        else
        {
            let i=num-1;
            flag=true;
            while(i>1)
            {
                if(num%i==0)
                {
                flag=false;
                break;
                }
                else
                {
                    i--;
                }
            }
            if(flag)
            {
                return num;
            }
        }
    });
    return res;
};
console.log(isPrime(numberArray));

let nonPrime=(numberArray)=>{
    let res=numberArray.filter((num)=>{
        if(num==2||num==1)
        {
            return num;

        }
        else
        {
            let i=num-1;
            flag=false;
            while(i>1)
            {
                if(num%i==0)
                {
                flag=true;
                break;
                }
                else
                {
                    i--;
                }
            }
            if(flag)
            {
                return num;
            }
        }
    });
    return res;
};
console.log(nonPrime(numberArray));



let even=numberArray.filter((num)=>num%2==0);
console.log(even);

const myArray = [11, 34, 20, 5, 53, 16];

let findSquareOfNumbers=myArray.map(function(m){
    return m*m;
    });

console.log(findSquareOfNumbers)

var myArraymul=[2, 3, 5, 10]
let multiply=myArraymul.reduce(function(num1,num2)
{
    return num1*num2;
});

console.log(multiply)











