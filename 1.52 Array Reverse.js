var family = ['Hasna', 'Sopna', 'Chaina', 'Nuruzzaman', 'Hasan'];

// Array Traverse
// for(var i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// Reverse Array new line
for(var i = family.length - 1; i >= 0; i--){
    console.log(family[i]);
}



// Reverse Array 
var newFamily = [];
for(var i = family.length - 1; i >= 0; i--){
    newFamily.push(family[i]);
}
console.log(newFamily);

// Built in method
// console.log(family.reverse());