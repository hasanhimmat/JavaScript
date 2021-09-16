// Filter function

// // Array to odd numbers
// var numbers = [2,4,2,89,1,4,83,62,75,39,91,97,67,65,55,87];
// var numOdds = [];

// for(var single of numbers){
//     if(single % 2 == 1){
//        numOdds.push(single);
//     }
// }

// console.log(numOdds);

var numbers = [2,4,2,89,1,4,83,62,75,39,91,97,67,65,55,87];

var evenArray =  numbers.filter(function(value){
    return value % 2 == 0;
});

console.log(evenArray);

