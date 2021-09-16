// // Pure function in javaScript

// function pure(){
//     console.log('Hello I Love You');
// }


// pure();

// function sqr(n){
//     return n*n;
// }

// console.log(sqr(2));
// console.log(sqr(3));
// console.log(sqr(5));


// // Not a pure function
// console.log('side effects');
// var n = 10;
// function change(){
//     n = 100;
// }

// change();
// console.log(n);


var mobile = {
    name: 'Note 9 pro',
    price: 23350
}

function newPhone(mobile){
    mobile.name = 'Samsung';
    mobile.price =34500;
    console.log(mobile)
}


newPhone(mobile)

console.log(mobile);