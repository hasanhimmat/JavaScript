// Sort in array

var friends = [
    {
        name: 'Zahid Hasan',
        age: 24
    },
    {
        name: 'Hasanur Rahman',
        age: 20
    },
    {
        name: 'Sujon',
        age: 22
    },
]

friends.sort(function(a,b){
    if(a.age > b.age){
        return 1;
    }else if(a.age < b.age){
        return -1;
    }else{
        return 0;
    }
});

console.log(friends);

// Other function

var numbers = [2,46,42,64,90,21,32];

var pos = numbers.every(function(value){
   return value % 2 == 0;
});

console.log(pos);

var neg = numbers.some(function(value){
    return value % 2 == 1;
});

console.log(neg);