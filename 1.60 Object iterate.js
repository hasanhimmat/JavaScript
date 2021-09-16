var mobile = {
    name: 'Xiaomi Redmi 6A',
    ram: '2Gb',
    rom: '16Gb',
    price: '9999'
}

// // in operator
// if('name' in mobile){
//     console.log('We Are Found');
// }else{
//     console.log('We Are Not Found')
// }

// Iterate ot traverse
for(var item in mobile){
    console.log(item + ': ' + mobile[item]);
}