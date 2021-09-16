// Break statement
// Break statement break loop and others

var isRunning = true;
while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand == 9){
        console.log('Winner Winner Chicken Dinner');
        break;
    }else{
        console.log('You have got', rand);
    }

}