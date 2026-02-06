//normal fn
function add(a, b) {
    return a + b;
}

console.log(add(2,3));

//arrow fn
 add = (a, b) => a + b;
 console.log(add(4, 3));

//IIFE
var a = (function add(a, b) {
    return a + b;
})(5,3);
console.log("Type of A is: " + typeof a)
console.log(a);

