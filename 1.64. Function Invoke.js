// Function Invoke
function whtIs(n){
    // Logic
    var processNum = n % 2;
    if(n == null){
        console.log('Please increase value');
    }else if(n == 0){
        console.log('Please increase value of', n);
    }else if(n > 0 && processNum == 0){
        console.log(n, 'is positive Even Number');
    }else if(n < 0 && processNum == 0){
        console.log(n, 'is negative Even Number');
    }else if(n > 0 && processNum == 1){
        console.log(n, 'is positive Odd Number');
    }else{
        console.log(n, 'is negative Odd Number');
    }
}

whtIs(2);
whtIs(1);

// // Function use in loop
// for(var i = 1; i<=100; i++){
//     whtIs(i);
// }