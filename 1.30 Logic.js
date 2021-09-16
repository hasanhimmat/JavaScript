// Logic practice Even and Odd advanced
var inputNum = 5;
var processNum = inputNum % 2;

// Logic and conditions
if(inputNum == 0){
    console.log('Please increase value of', inputNum);
}else if(inputNum > 0 && processNum == 0){
    console.log(inputNum, 'is positive Even Number');
}else if(inputNum < 0 && processNum == 0){
    console.log(inputNum, 'is negative Even Number');
}else if(inputNum > 0 && processNum == 1){
    console.log(inputNum, 'is positive Odd Number');
}else{
    console.log(inputNum, 'is negative Odd Number');
}

// Leap Year
var year = 2020;

// Logic and conditions
if(year % 400 == 0){
    console.log(year, 'is Leap Year');
}else if(year % 100 != 0 && year % 4 == 0){
    console.log(year, 'is Leap Year');
}else{
    console.log('No Leap Year');
}
