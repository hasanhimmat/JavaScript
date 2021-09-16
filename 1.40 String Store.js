// String store

var myName = 'Md. Hasanur Rahman'; // string literal
var address = String('Bogura'); // string constructor

console.log(myName);
console.log(address);

// use string constructor
var age = 20;
// var ageStr = age + '';
// var ageStr = age.toString();
var ageStr = String(age);
console.log(ageStr, typeof ageStr);