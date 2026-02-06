
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
        return function mostinner() {
            count += 3;
            console.log(count);
        }
    }
}
var fn = outer();
var mostinnerfn = fn();
console.log(typeof fn)
fn();
fn();
mostinnerfn();
fn();
mostinnerfn();

// function outer() {
//       let count = 0;
//       return function inner() {
//         count++;
//         console.log(count);
//         // return count;
//       }

//     }
//     let fn = outer();
//     fn();
//     fn();
