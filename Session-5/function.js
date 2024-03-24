// create  a function that can add two numbers
function sum(num1, num2) {
  // multiple 10 line
  return num1 + num2;
}
function product(num1, num2) {
  console.log(num1 * num2);
}
let x = 5;
let y = 7;
let z = sum(x, y);
console.log(z);
product(x, y);

// Function expression
let diff = function (num1, num2) {
  return num1 - num2;
};

//Arrow function
let div = (num1, num2) => {
  return num1 / num2;
};

console.log(diff(x, y));
console.log(div(x, y));
