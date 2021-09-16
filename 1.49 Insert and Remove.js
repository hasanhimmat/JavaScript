// Insert and remove
var numbers = [1,2,3,4,5];

// numbers.push(10);
// numbers.unshift(0);

// numbers.splice(0, 0, 11); // insert
// numbers.splice(0, 1, 11); // update
numbers.splice(0, 1); // delete

console.log(numbers);

// slice
var family = ['Hasan', 'Nuruzzaman', 'Abdul Hasib', 'Hossain', 'Obaidulla', 'Abdur Rahim'];

var newThree = family.slice(2,4);
console.log(newThree);