// Variable
var fname = 'hasanur';
var lname = 'rahman';

console.log(fname.toUpperCase());
console.log(lname.toUpperCase());

// Problem solve
function flUpper(str){
    var first = str.charAt(0);
    var upper = first.toUpperCase();
    var next = fname.slice(1);
    var result = upper + next;
    console.log(result);
}

flUpper(fname);
flUpper(lname);

