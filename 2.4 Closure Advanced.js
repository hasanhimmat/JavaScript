// Closure advanced in javaScript

// This is closure
// function myInfo(){
//     var message = 'I am Learning javaScript';
    
//     function education(){
//         console.log(message);
//     }

//     education();
// }

// myInfo();


// Closure 
function myInfo(){
    var message = 'I am Learning javaScript';
    
    return function (){
        console.log(message);
    }
}

var edu = myInfo();
edu();



