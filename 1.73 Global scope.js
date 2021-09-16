// Global scope project

function check(num){
    function one(){
      return num % 3 == 0;
    }

    function two(){
        return num % 5 == 0;
    }

    // condition
    if(one() && two()){
        console.log(num + ' is divisible by both 3 and 5');
    }else{
        console.log('Not a valid number');
    }
}

check(10);
check(20);
check(30);