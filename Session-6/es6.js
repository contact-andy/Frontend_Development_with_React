// ES6

// // Destructing assignment
// let stud = {
//   name: "Medhanit",
//   age: 15,
// };

// // let name = stud.name;
// // let age = stud.age;

// let { name, age } = stud;

// console.log(name);
// console.log(age);

// let number = [1, 2, 3, 4];
// let [x, y, z, w] = number;
// console.log(x);

// Rest operator  ...

// function sum(...input) {
//   let s = 0;
//   for (let x of input) {
//     s += x;
//   }
//   console.log(s);
// }

// sum(1, 2, 3, 5);

// Spread operator ...
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [...num1, 8, 9];
num3.push(7);
console.log(num1);
console.log(num2);
console.log(num3);
