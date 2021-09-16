// Currying in javaScript

// function add(a, b, c){
//     return a + b + c;
// }
// allAdd = add(21,9,70);



function currying(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

var result = currying(6)(4)(90);

console.log(result);