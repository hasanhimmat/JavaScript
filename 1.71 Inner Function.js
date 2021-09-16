// Inner Function in javaScript
function result(greet, name){
    function message(){
        console.log(greet, name)
    }
    message();
}

result('Hello', 'Google');


// Inner Function best practice
function pop(greet, name){
    function user(){
        if(name){
            return name.split(' ')[0];
        }else{
            return '';
        }
    }
    var output = greet + ' ' + user();
    console.log(output);
}

pop('Good Morning');