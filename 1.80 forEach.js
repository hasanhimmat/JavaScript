// forEach in javaScript

var numbers = [3,5,67,7,32,87];
// var sum = 0;
// numbers.forEach(function(value, index, numbers){
//    sum += value;
// });
// console.log(sum);


// Our function
function forEach(inArr, cb){
    for(var i = 0; i < inArr.length; i++){
       cb(inArr[i], i, inArr);
    }
}

var sum = 0;
forEach(numbers, function(value, index, array){
    // console.log(value, index, array);
    // sum += value;
});

// console.log(sum);


forEach(numbers, function(value, index, array){
    numbers[index] = value + 5;
});

console.log(numbers);
