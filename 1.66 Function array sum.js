// Array sum function
function sumArray(inputDat){
   var temp = 0;
   for(var i = 0; i < inputDat.length; i++){
       temp = temp + inputDat[i];
   }
   console.log(temp)
}

// Array Sum
var all1 = [7,6,4];
var all2 = [7,6,87];
var all3 = [34,87];

sumArray(all1);
sumArray(all2);
sumArray(all3);