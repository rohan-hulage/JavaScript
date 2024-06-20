// Arrays : Arrays are collection of items
// Array is special type of object
// Arrays are mutable is js

let marks = [99, 98, 90, 91];
console.log(marks);
console.log(marks.length); // returns length of array
console.log(marks[0]); // element at 0 index i.e first element
console.log(marks[1] = 94); 
console.log(marks);

let sum = 0;
for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
    sum = sum + marks[i];
}
console.log(sum);

let avg = sum / marks.length;
console.log(avg);

console.log(marks.push(87));
console.log(marks);
console.log(marks.pop(87));
console.log(marks);
console.log(marks.toString);
console.log(marks);

let marksB = [88, 90, 99, 100];

let combineMarks = marks.concat(marksB);
console.log(combineMarks);

console.log(marks.slice(0,2));
