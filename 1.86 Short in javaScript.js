// Sort in javaScript

// var numbers = [9,3,7,2,0,4,1,5,8,1];

// numbers.sort();
// console.log(numbers);


// Sort and call back function use
var numbers = [9,3,-3,7,2,0,4,1,5,-9,8,-1];

numbers.sort(function(a,b){
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        return 0;
    }
});

console.log(numbers);

// numbers.sort(function(a,b){
//     if(a > b){
//         return -1;
//     }else if(a < b){
//         return 1;
//     }else{
//         return 0;
//     }
// });

// console.log(numbers);