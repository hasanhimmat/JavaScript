// Hoisting in javaScript
var a = 100;

// newPrint(a); // problem

print(10);

var newPrint = print;
newPrint(45);

function print(a){
    console.log(a);
}

print(a);


// Creational Phase