// Scope chin jn javaScript

var a = 20;

function A(){
    var b = 12;
    function B(){
        var c = 45;
        console.log(c);
    }
    function C(){
        var d = 56;
        console.log(d);
    }
    console.log(b);
    D(b);
    B();
    C();

}

function D(n){
    return n + A;
}


// console.log(A());

// A -> a, b, B(), C(), D();
// B -> a, b, c, B(), C(), D();
// C -> a, b, d, B(), C();
// D -> a, n, A();