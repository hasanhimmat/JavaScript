// Closure in javaScript
var a = 10;

function print(){
    var x = 5;

    return function(){
        console.log(x);
    }
}

var abc = print();
console.dir(abc);

// open a browser in this code
// Without arguments pass in data this function closure