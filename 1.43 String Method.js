// String method

var fname = 'Md.';
var mname = 'Hasanur';
var lname = 'Rahman';
var fullName = fname.concat(' ', mname, ' ', lname);

console.log(fullName);

// console.log(fullName.substr(4,5));
console.log(fullName.substr(4,5));
// console.log(fullName.substr(4,5).toUpperCase());
// console.log(fullName.substr(4,5).toLowerCase());

// // charAt
// console.log(fullName.charAt(4));
// console.log(fullName.charAt(5));
// console.log(fullName.charAt(6));
// console.log(fullName.charAt(7));
// console.log(fullName.charAt(8));


// console.log(fullName.startsWith('M'));
// console.log(fullName.endsWith('n'));


// space remove
console.log('     Hasanur Rahman     '.trim());

// split

var myJob = 'I am Googlear';

console.log(myJob.split(' '));