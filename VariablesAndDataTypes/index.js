console.log("Hello World!");

// Variables :

// var : Variable can be redeclare and upadate
var age = 20;
var age = 30; // variable gets updated and also redeclared

// let : Variables cannot be redeclare but can be update
let agel = 20;
agel = 30; // varible gets updated but didn't redclared

// const: Variables cannot be redeclare and update
const agec = 20; // cannot be redeclared or updated or will give error


/* -------------------------------------------------------------------------------------------------------------- */

// Data Types :

// Primitive Datatypes :

// 1) number : any numeric value eg. integer, float
let price = 100;

// 2) String : text 
let name = "Abhishek";

// 3) Boolean : true or false
let isAllowed = true;
let isFollow = false;

// 4) Undefined : when value is not assigned to variable then it is undefined
let a; // it will print undefined

// 5) Null : null is type of object : absense of value
let b = null;

// 6) BigInt : stores large integers
let i = BigInt("23443523653467364"); // it will add n after the integer number

// 7 Symbol : stores symbols
let s = Symbol("Hello!"); // have type of symbol



// Non-Primitive data types

// Objects : Arrays, functions : objects are collection of value or peice of code which performs some functionality
// objects have data with key and value

// const student = {
//     name: "Abhishek",
//     age: 22,
// }

// // propmpt
// let num = prompt("Enter a number");
// let result = num % 5 === 0 ? "Multiple of 5" : "Not multiple of 5";  // ternary operator
// console.log(result);