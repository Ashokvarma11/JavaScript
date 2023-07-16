// Conditional Operators

// Example1
console.log("---------Conditional Operators----------");
let age=prompt("Enter your age");
if(age>=18){
    console.log("You are eligible");
}
else{
    console.log("Not eligible");
}
// In the above code if condition is executed as age>=18 condition is true .

//Example2
let powerIsThere=window.prompt("Power is there or not: enter yes or no");
if(powerIsThere=="yes"){
    console.log("Power is there so fan rotates");
}
else{
    console.log("The fan doesnt rotates");
}

//Example3
let marks=window.prompt("Enter your marks");
if(marks>=36){
    console.log("Pass");
}
else{
    console.log("Fail");
}

//Example4
let quizQuestion=window.prompt("Which country is the 5th largest economy in the world: 1.China 2.India 3. Russia 4.USA");
if(quizQuestion==2){
    console.log("you are correct")
}
else{
    console.log("India is the right answer");
}


//Multiple if else statements
// If we want to check multiple conditions we use if else if and else.
//It checks all the conditions i.e if and else if conditions and then else.

//Example1
let Age=window.prompt("Enter your age to get your category");
if(Age<=14){
    console.log("You are a child");
}
else if(Age>15 && Age<=25 ){
    console.log(" Younger Youth");
}
else if(Age>25 && Age<60){
    console.log("Older youth");
}
else{
    console.log("seniors");

}

//Example2
let knowWhether=window.prompt("Enter value to know the whether");
if(knowWhether<=15){
    console.log("The weather is cloudy");
}
else if(knowWhether>15 && knowWhether<=25){
    console.log("The weather is cool");
}
else if(knowWhether>25 && knowWhether<35){
    console.log("The weather is hot");

}
else{
    console.log("The weather is very hot")
}

//Example3
let Marks=window.prompt("Enter marks to get grade");
if(Marks<36){
    console.log("F");
}
else if(Marks>=36 && Marks<45){
    console.log("E")
}
else if(Marks>=45 && Marks<55){
    console.log("D")
}
else if(Marks>=55 && Marks<65){
    console.log("C")
}
else if(Marks>=65 && Marks<75){
    console.log("B")
}
else if(Marks>=75 && Marks<85){
    console.log("A")
}
else{
    console.log("Ex")
}

//Example4
let findQuarter=window.prompt("Enter the number of month to know the quarter of that month ");
if(findQuarter>=1 && findQuarter<4){
    console.log(findQuarter+"month comes under '1st' quarter")
}
else if(findQuarter>=4 && findQuarter<7){
    console.log(findQuarter+"th month comes under '2nd' quarter")
}
else if(findQuarter>=7 && findQuarter<10){
    console.log(findQuarter+"th month comes under '3rd' quarter")
}
else if(findQuarter>=10 && findQuarter<=12){
    console.log(findQuarter+"th month comes under '4th'quarter")
}
else {
    console.log("Enter values only between 1 and 12");
}




