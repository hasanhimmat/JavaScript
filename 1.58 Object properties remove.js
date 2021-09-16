// Object access
var mobile = {
    name: 'Xiaomi Redmi 6A',
    ram: '2Gb',
    rom: '16Gb',
    price: '9999'
}

// Delete properties
delete(mobile.name);
delete mobile.price;

console.log(mobile);