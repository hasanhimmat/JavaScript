// Higher order function

function add(a,b){
    return a + b;
}


function manipulate(a,b, func){
    var c =  a + b;
    var d = a - b;

    function gun(){
        var g = func(a,b);
        return c*d*g;
    }

    return gun;
}

var result = manipulate(3,4, add);
console.log(result());