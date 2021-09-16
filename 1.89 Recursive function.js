// Recursive function
// function everyTen(n){
//    if(n == 0 ){
//        return
//    }
//    console.log('I Love You');
//    everyTen(n - 1);
// }

// everyTen(5);

var temp = 0;
function oneToHundred(n){
    if(n == 0){
        return;
    }
    temp = temp + n;
    oneToHundred(n - 1);
}

oneToHundred(5);

console.log(temp);