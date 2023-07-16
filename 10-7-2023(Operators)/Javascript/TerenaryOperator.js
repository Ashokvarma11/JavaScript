
//Terenary Operator
//If condition is true the statement after question mark is printed else the statement after colon is printed


console.log("Terenary Operators");

// Example1
let age=window.prompt("Enter the age");
age>18?console.log("Eligible for vote"):console.log("Not Eligible for vote");

//Example2
let Marks=window.prompt("Enter marks to know your are pass or fail");
Marks>36?console.log("Pass"):console.log("Fail");


//Example3
let grade=window.prompt("Enter marks to know your grade");
grade>36 && grade<45?console.log("Grade E"):
grade>=45 && grade<=55? console.log("Grade D"):
grade>55 && grade <=65?console.log("Grade C"):
grade>65 && grade<=75?console.log("Grade B"):
grade >75 && grade<=85?console.log("Grade A "):
grade>85?console.log("Grade Ex"):console.log("Fail");


//Example4
let findQuarter=window.prompt("Enter no of the month");
findQuarter>=1 && findQuarter<4?
console.log(findQuarter+"month comes under '1st' quarter"):findQuarter>=4 && findQuarter<7?
console.log(findQuarter+"th month comes under '2nd' quarter"):findQuarter>=7 && findQuarter<10?
console.log(findQuarter+"th month comes under '3rd'quarter"):findQuarter>=10 && findQuarter<=12?
console.log(findQuarter+"th month comes under '4th' quarter") :console.log("Enter valid input");
