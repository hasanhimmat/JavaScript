// Map in javaScript
// var numbers = [1,2,3,4,5];

// function something(inArr){
//     var newArray = [];
//     for(var i = 0; i < inArr.length; i++){
//         var temp = inArr[i] * inArr[i];
//         newArray.push(temp);
//     }
//     return newArray;
// }

// console.log(something(numbers))


// Map in javaScript
var numbers = [1,2,3,4,5];

function something(inArr, cb){
    var newArray = [];
    for(var i = 0; i < inArr.length; i++){
        var temp = cb(inArr[i], i, inArr);
        newArray.push(temp);
    }
    return newArray;
}

var qb = something(numbers,function(value){
    return value * value * value;
});

console.log(qb);

