// First class function

function add(a,b){
    return a+b;
}


var sum = add;
console.log(sum(3,7));
console.log(typeof sum);

var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](3,7));

var obj = {
    sum: add
}

console.log(obj.sum(3,5));


setTimeout(function(){
    console.log('Bum! Bum! Bum');
}, 2000)