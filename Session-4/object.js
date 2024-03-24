// object
let student = {
  name: "Abebe",
  age: 21,
  dept: "CS",
  learn: function () {
    console.log("The student is learning");
  },
  takeExam: function () {
    console.log("The student is taking an exam");
  },
};

console.log(student.name);
student.learn();
student.takeExam();
