// async and await

const area = async (l, w) => {
  let a = await (l * w);
  //   return a;
  console.log(`The area is ${a}`);
};

console.log("The operation has been started");
// console.log(`The area is ${area(2, 3)}`);
area(2, 3);
console.log("The operation has been completed");
// console.log("The area is:"+ area(2,3))
