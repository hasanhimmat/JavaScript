// Anonymous function use

var love = function(what){
    return what;
}

// var newLove = love('Hello World!');
// console.log(newLove);

love('I Love You');

// Anonymous function use
// Set timeout
setTimeout(function(){
    console.log('Time is start');
}, 5000)


var lovePro = love;

console.log(lovePro('Hello javaScript'))
