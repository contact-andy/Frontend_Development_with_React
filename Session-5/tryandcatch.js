// try and catch
try {
  let x = 6;
  let y = 0;
  if (y == 0) throw [1, 2, 3];
  else console.log(x / y);
  //   test();
} catch (err) {
  console.log(err);
} finally {
  console.log("The program ends");
}
