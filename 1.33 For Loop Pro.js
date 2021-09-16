// 1-100 Even number sum

var sum = 0;
for(var i = 2; i <= 100; i += 2){
    var result = sum + i;
    console.log(i + ' + ' + sum + ' = ' + result);
    sum = i;
}

console.log('Result = ' + result);