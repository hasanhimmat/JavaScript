// Nested Scope in javaScript

var age = 21;
// var y = 50;

function myInfo(){
    var age = 20;
    console.log(age);

    function job(){
        // var y = 65;
        console.log(age);
    }

    job();
}

myInfo();