// Object method or function
var mobile = {
    name: 'Xiaomi Redmi 6A',
    ram: '2Gb',
    rom: '16Gb',
    price: '9999'
}

// // Object method
// console.log(Object.keys(mobile));
// console.log(Object.values(mobile));
// console.log(Object.entries(mobile));

console.log(Object.values(mobile));

// Object assign method
var mob = Object.assign(mobile);
mob.name = 'Samsung';
console.log(Object.values(mob));