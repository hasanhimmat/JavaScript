// Map in javaScript

// // Solve one way
var numbers = [1,2,3];
// var sqr = [];

// for(var num of numbers){
//     var result = num * num;
//     sqr.push(result)
// }

// console.log(numbers);
// console.log(sqr);


// Use map function   
var sqrArr = numbers.map(function(value){
//    return Math.random() * 100;
    return value * value;
});

console.log(numbers);
console.log(sqrArr);