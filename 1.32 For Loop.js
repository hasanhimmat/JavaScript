// // For Loop
// for(var i = 1; i < 100; i++){
//     console.log(i);
// }

// // 1-100 Odd Number
// for(var i = 1; i < 100; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     } 
// }

// Sum 1 - 10;
var sum = 0;
for(var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum = sum + i;
}
// All sum
console.log('Result = ' + sum)
