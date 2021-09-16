// Return anything from a function
function all(){
    var temp = 0;
    for(var i = 0; i < arguments.length; i++){
        temp += arguments[i];
    }
    return temp;
}

var result = all(10,6,6);

console.log(result);

// if you don't return function you can't not assign function variable


function my_info(name, email){
    return{
        name: name,
        email: email
    }
}

var hasan = my_info('Hasan Himmat', 'hasan0506@gmail.com');
console.log(hasan);
// console.log(hasan.name);
// console.log(hasan.email);