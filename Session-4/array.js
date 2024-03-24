//Array
// const studentName = ["Meron", "Jemal", "Abebe", "Kebede"];
// console.log(studentName.length);
// console.log(studentName.indexOf("Jemal"));
// // console.log(studentName.indexOf("Kebede"));
// if (studentName.indexOf("Abebe") == -1) {
//   console.log("The student is not found, try again");
// } else {
//   console.log("The student is found.");
// }
// studentName.sort();
// studentName.reverse();
// console.log(studentName);

// studentName.push("Ali");
// studentName.push("Alemu");
// console.log(studentName);
// studentName.pop();
// studentName.pop();
// studentName.pop();
// studentName.pop();
// console.log(studentName);

const studAge = [12, 23, 21, 20, 18];
// const updatedStudAge = studAge.map(function (age) {
//   return age + 1;
// });
// console.log(studAge);
// console.log(updatedStudAge);
// console.log(Math.round(5.656));

// for (let i = 0; i < studAge.length; i++) {
//   console.log(studAge[i] + 1);
// }
for (let age of studAge) {
  console.log(age);
}
