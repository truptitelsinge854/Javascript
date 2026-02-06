function test() {
  if (true) {
    var x = 10;
    console.log("Inside function: " + x);
  }
  var x = 20;
  console.log(x); // ✅ 10
}
test();


