// 1) Swap two numbers
let num1 = 10;
let num2 = 20;
console.log("numbers before swap : ",num1, num2)
let flag;
flag = num1;
num1 = num2;
num2 = flag
console.log("numbers after swap : ",num1, num2)

// 2) Max number
const maxNumber = Math.max(num1, num2);
console.log("Max number is : ",maxNumber);

// 3) Fizz Buzz
let num = 9;
if(num%3 === 0 && num%5 === 0){
    console.log("FizzBuzz");
}else if(num%3 === 0){
    console.log("Fizz");
}else if(num%5 ===0){
    console.log("Buzz");
}else {
    console.log("Enter new number")
}

// 4) Speed limit
let speedLimit = 100;
let vehicleSpeed = 180;

if(vehicleSpeed <= 100){
    console.log("Vehicle speed within limit");
}else{
    console.log("Vehicle speed out of limit");
}

// 5) Odd and Even number from given range : print separately
let start = 1;
let end = 10;

for(i = start; i <= end; i++){
    if(i%2 === 0){
        console.log("Even Numbers : ", i);
    }
}

for(i = start; i <= end; i++){
    if(i%2 !== 0){
        console.log("Odd Numbers : ", i);
    }
}


// 6) sum of multiples
let number = 10;
let sum = 0;
for(let i = start; i <= end; i++){
    if(number%i === 0){
        sum += i;
    }
}
console.log("Sum of multiple is : ", sum);

// 7) nested loop star pattern
let star = "";
let numberOfLines = 5;
for(let i = 1; i <= numberOfLines; i++){
    for(let j = 1; j <= i; j++){
        star += "*";
    }
    star += "\n";
}
console.log(star);

// 8) Calculate grade on the basis of avg of total marks
let marks = [85, 85, 85, 85, 45];
let sumOfMarks = 0;
for(let i = 0; i < marks.length; i++){
    sumOfMarks = sumOfMarks + marks[i];
}
console.log(sumOfMarks);
let avg = sumOfMarks / marks.length;

console.log(avg);
if(avg >= 90){
    console.log("A+");
}else if(avg >= 80){
    console.log("A");
}else if(avg >= 70){
    console.log("B+");
}else if(avg >= 60){
    console.log("B+");
}else if(avg >= 50){
    console.log("C+");
}else if(avg >= 40){
    console.log("C");
}else{
    console.log("Fail");
}

// 9) Generate random number
let random = Math.random()*10;
console.log(random);

let randomArray = [];
randomArray.push(random);
console.log(randomArray);

// 10) prime number in range
let startPrime = 2;
let endPrime = 20;
for(let i = startPrime; i <= endPrime; i++){
    let flag = 0;

    for(let j = 2; j < i ; j++){
        if(i % j === 0){
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

// 11) Area of Circle
let radius = 3;
let area = (Math.PI) * Math.pow(radius, 2);
console.log("Area of Circle is : ", area);


// 12) pass arguments in array
const array = [];
let arg1 = 1;
let arg2 = 2;
let arg3 = "Hello";
array.push(arg1, arg2, arg3);
console.log(array);

// 13) number exits in array
const exitArray = [1, 22, 12, 11, 20, 1];
const exitNumber = 0;
const isPresent = exitArray.includes(exitNumber);
console.log(isPresent);

// 14) remove element from array
console.log(exitArray.splice(1, 1));
console.log(exitArray);

// 15) Count of element occured in array
let count = 0;
let element = 1;
for(let i = 0; i < exitArray.length; i++){
    if(element === exitArray[i]){
        count++;
    }
}
console.log("Count of occured element",count);

// 16) Largest element of array
const arrayLaregst = [10, 20, 30, 40]
const maxElement = Math.max(...arrayLaregst);
console.log("Largest element of array : ",maxElement);

// 17) Create Greet
const name = "Abhishek";
const age = 22;
console.log(`Hello everyone my name is ${name} and my age is ${age}`);

// 18) Object Comparison
const rohan = {
    age: 22
}
const abhishek = {
    age: 22
}

for(let key in rohan){
    if(rohan[key] === abhishek[key]){
        console.log("Objects are equal");
    }else{
        console.log("Objects are not equal");
    }
}


// Sum of Two numbers using arrow function
const addition = (a, b) => {
    console.log(a + b)
}

console.log(addition(2,3));

// DOM : Document object model : Access HTML in JS as object "document" and this is available in window object
// when the eb page is loaded then the dom is getting created



