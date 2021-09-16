// Return function another function

function greet(msg){
    function sayHi(name){
        return msg + ', ' + name + '!';
    }

    return sayHi;
}

var morning = greet('Good Morning');

var newMes = morning('Hasan Himmat');

console.log(newMes);