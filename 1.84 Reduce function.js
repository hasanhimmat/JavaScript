// Reduce function in javaScript
var numbers = [1,2,3,4,5];

// var sum = numbers.reduce(function(prev, curr){
//     return prev + curr;
// }, 100);

// var max = numbers.reduce(function(prev, curr){
//     return Math.max(prev, curr)
// },0)

// console.log(sum);
// console.log(max);

function myReduce(numbers, cb, acc){
    for(var i = 0; i < numbers.length; i++){
        acc = cb(acc, numbers[i]);
    }
    return acc;
}

var sum = myReduce(numbers, function(prev, curr){
    return prev + curr;
},0);

console.log(sum);