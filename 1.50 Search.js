// Search in array
var numbers = [4,78,3,7,2,33,10,26,24,54,98,65,23, 34,87];

var searchItem = 65;
var isFound = false;

for(var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if(num == searchItem){
        console.log('Data Found at Index : ' + i);
        isFound = true;
        break;
    }
}

// Not Found
if(!isFound){
    console.log('Data Not Found');
}