// class
class Student {
  name = "";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  learn() {
    console.log("Learning");
  }
  eat() {
    console.log("Eating");
  }
}

let stud1 = new Student("Meron", 23);
console.log(stud1.name);
console.log(stud1.age);
stud1.learn();
stud1.eat();

export let dept = "CS";
let batch = "2024";
export default batch;
