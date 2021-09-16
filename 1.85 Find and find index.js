// Find and find index function
var numbers = [2,4,5,3,6,67,9,43,24];

// var result = numbers.find(function(value){
//     return value == 9;
// });

// console.log(result);

// // Find index
// var result = numbers.findIndex(function(value){
//     return value == 9;
// });

// console.log(result);

function mySearch(inArr, cb){
    for(var i = 0; i < inArr.length; i++ ){
        if(cb(inArr[i])){
            // return inArr[i];
            return i;
        }
    }
}

var res = mySearch(numbers, function(value){
    return value === 9
});

console.log(res);