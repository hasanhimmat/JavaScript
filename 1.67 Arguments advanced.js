// Arguments advanced
function all(){
    var temp = 0;
    for(var i = 0; i < arguments.length; i++){
        temp += arguments[i];
    }
    console.log(temp);
}

all(10,6,6);
