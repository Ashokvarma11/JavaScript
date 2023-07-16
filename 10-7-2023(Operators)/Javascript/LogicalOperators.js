//Logical Operators 

console.log("------LogicalOperators------");
console.log("AND Operator");
//If both given inputs are true then only it gives the output true.
let a=2;
let str="hello";
console.log(a>1 && a<5);
//here a is greater than 1 and less than 5.Both the conditions are true so it prints ture.
console.log(str=="hello"&& a>2);
//here first condition is true and second condition is false.so overall results in false.
console.log(a<2 && a>3);
console.log(a<=2 && a=="2");
console.log(a<=2 && a==="2");

console.log("OR Operator");
//If atleast one condition in true overall output results in true.
console.log(a<2 || a==2);
console.log(str=="hello" || a>3);
console.log(a>2 || a>3);
console.log(a<=2 || a=="2");
console.log(a<=2 || a==="2");

console.log("NOT Operator");
//It just gives the inverse of input .If input is true it returns false and vice versa.
let b=true
console.log(!b);
let c =false;
console.log(!c);
console.log(!2);
console.log(!0);
console.log(!1);