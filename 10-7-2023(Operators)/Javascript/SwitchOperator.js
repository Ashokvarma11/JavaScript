//Switch statements
//Example1

console.log("---------Switch Statements---------")
let  Age1=window.prompt("Enter the Age")
switch(true){
    case (Age1<=14):console.log("You are a child")
    break;

    case (Age1>15 && Age1<=25):console.log("Youth")
    break;
    case (Age1>25 && Age1<60):console.log("older youth")
    break;

    default:console.log("Senior Citizen")
}

//Example2
let Wheather=window.prompt("Enter the value of degrees");
switch(true){
    case (Wheather<=15):console.log("Weather is cool")
    break;

    case (Wheather>15 && Wheather<=25):console.log("Weather")
    break;
    case (Wheather>25 && Wheather<40):console.log("weather is hot")
    break;

    default:console.log("weather is very hot")

}
//Example3

let Marks=window.prompt("Enter marks to get grade");
switch(true){
case(Marks<36):
    console.log("F")
case(Marks>=36 && Marks<=45):
    console.log("E")
case(Marks>=45 && Marks<=55):
    console.log("D")
case(Marks>=55 && Marks<=65):
    console.log("C")
case(Marks>=65 && Marks<=75):
    console.log("B")
case(Marks>=75 && Marks<=85):
    console.log("A")
default:
    console.log("Ex")
}

//Example4
let findQuarter=window.prompt("Enter the no of the month to know which quarter it comes");
switch(true){
        case (findQuarter>=1 && findQuarter<4):
            console.log(findQuarter+"month comes under '1st' quarter")        
            break;
    
        case (findQuarter>=4 && findQuarter<7):
            console.log(findQuarter+"th month comes under '2nd' quarter")        
            break;
        case (findQuarter>=7 && findQuarter<10):
            console.log(findQuarter+"th month comes under '3rd' quarter")        
            break;
            case (findQuarter>=10 && findQuarter<=12):
                console.log(findQuarter+"th month comes under '4th' quarter")
            break;    
        default:console.log("Enter valid input");
}