function arr() {
    let arr = [10, 20, 30, 40];
    let arr2 = [50, 60];
    let a =  arr.slice(1, 3);  // including start index and excluding end index, does not modify arr.
    console.log("Value of a : " + a);
    console.log("Array after slice: " + arr);

    let b = arr.splice(0, 2);  // Deletes 2 values from 0th location (index, deletecount) modifies arr.
    console.log("Value if b : " + b);
    console.log("Array after slpice: " + arr);

    arr = arr.reverse(); 
    console.log("Reverse array: " + arr);
    let arr3 = arr.concat(arr2);
    console.log(arr3);
}
arr();