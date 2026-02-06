function checkType() {
    console.log(5 == '5') // value is converted to a common type before comparison.
    console.log(5 === '5')  // value are compared as it is without conversion.
}
checkType();