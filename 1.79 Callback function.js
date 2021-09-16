// // Callback function
// function sample(a, b){
//     var c = a + b;
//     var d = b - b;

//     var result = add(c, d);
//     return result;
// }

// function add(a,b){
//     return a + b;
// }

// console.log(sample(5,8))


// Callback
function sample(a, b, cb){
    var c = a + b;
    var d = a - b;

    var result = cb(c, d);
    return result;
}

function add(a,b){
    return a + b;
}

var newResult = sample(5,8, add);
console.log(newResult)

// callback
var resultTwo = sample(5,8, function(c,d){
    // return c * d;
    return c - d;
});

console.log(resultTwo);