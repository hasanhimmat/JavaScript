var date = new Date();

var bar =  date.getDay();

switch(bar){
    case 0:
        console.log('রবিবার');
    break;

    case 1:
        console.log('সোমবার');
    break;

    case 2:
        console.log('মঙ্গলবার');
    break;
    
    case 3:
        console.log('বুধবার');
    break;

    case 4:
        console.log('বৃহস্পতিবার');
    break;
    
    case 5:
        console.log('শুক্রবার');
    break;

    case 6:
        console.log('শনিবার');
    break;
    
    default:
        console.log('সঠিক ইনপুট দিন');
}