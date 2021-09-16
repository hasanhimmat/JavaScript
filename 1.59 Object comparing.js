// Object comparing

// Object 1
var mobile1 = {
    name: 'Xiaomi Redmi 6A',
    ram: '2Gb',
    rom: '16Gb',
    price: '9999'
}


var mobile2 = {
    name: 'Xiaomi Redmi 6A',
    ram: '2Gb',
    rom: '16Gb',
    price: '9999'
}

// Value to value comparing
console.log(mobile1.name == mobile2.name);

// Tricks all value check
var str1 = JSON.stringify(mobile1) ;
var str2 = JSON.stringify(mobile2) ;

// console.log(str1 === str2);

