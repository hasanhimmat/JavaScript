// Scope in javaScript

var a = 'Hello World!';

// // This is block
// if(true){
//     console.log(a);
//     if(true){
//         var b = 'I am success';
//     }
// }

// console.log(b);

function x(){
    var a = '40'; // scope
    function y(){
        var a = 'I Love You';
        console.log(a)
    }
    console.log(a);
   y();
}

x();