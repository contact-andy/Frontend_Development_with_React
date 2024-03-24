// Promise
let isComplete = true;
let takeTraining = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isComplete) resolve("The training has been completed");
    else reject("The training is not completed");
  }, 3000);
});

console.log("Attending class");
console.log("Take an exam");
takeTraining
  .then((success) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  });
