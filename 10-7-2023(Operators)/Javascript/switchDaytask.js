
const date=window.prompt("Enter the date in the format( yyyy-mm-dd or yyyy/mm/dd ) to know its day");
let n=new Date(date).getDay();
//new Date() prints current date.new Date().getDay() prints the weekday in number 0 to 6 from sunday to saturday respectively.
//new Date(date) takes value from date and prints day according to that date.so according the number we are getting that is converted to respective day.
switch(true){
    case n==0:console.log(date+" : Its Sunday");
    break;
    case n==1:console.log(date+": Its Monday");
    break;
    case n==2:console.log(date+": Its Tuesday");
    break;
    case n==3:console.log(date+": Its Wednesday");
    break;
    case n==4:console.log(date+": Its Thursday");
    break;
    case n==5:console.log(date+": Its Friday");
    break;
    case n==6:console.log(date+": Its Saturday");
    break;
    default :console.log(date+": Please enter valid date")
}