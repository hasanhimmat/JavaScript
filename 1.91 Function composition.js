// Function composition in javaScript
// function myName(name){
//         console.log(name);
// }

// function wifeName(future){
//     return 'My Wife Name is ' + future;
// }

// myName(wifeName('Mst. Future'));



// three function

function print(input){
    console.log(input);
}


function multi(n){
    return n * 5;
}

function add(a, b){
    return a + b;
}


print(multi(add(5,5)));