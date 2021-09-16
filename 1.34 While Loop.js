// While Loop

// var i = 1;

// while(i<=10){
//     console.log(i + ' Md. Hasanur Rahman');
//     // i = i + 1;
//     // i += 1;
//     i++; 
// }


var isRunning = true;

while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand == 9){
        console.log('Winner Winner Chicken Dinner');
        isRunning = false;
    }else{
        console.log('You have got', rand);
    }

}