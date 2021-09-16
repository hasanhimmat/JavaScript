// Lexical scope in javaScript

// javaScript engine trams

var myName = 'Hasanur Rahman';
var myAge = 20;

function info(inName, inAge){
    console.log(inName);
    console.log(inAge || '');
}

info(myName);