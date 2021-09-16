// Array Method
var num = [1,3,5,23];
console.log(num.join(' => '));


num.fill('Fill');
console.log(num);

// // array marge
// var arr1 = [2,4,5,6,7,3];
// var arr2 = [23,43,52,61,72,31];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);

// // Is Array
// console.log(Array.isArray(arr3));


var arr = ['Hasan', 'Hasib', 'Hossain'];
var arr4 = arr; // Change dual array ! use
var arr4 = Array.from(arr); // Make array clone
arr4.push('Obaidulla');
console.log(arr);
console.log(arr4)
