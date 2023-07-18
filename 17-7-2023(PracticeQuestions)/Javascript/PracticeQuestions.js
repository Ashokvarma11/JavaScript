// // Create a function that takes two numbers as arguments and returns their sum
 
function sum(a,b){
    let c=a+b
    console.log("sum of the "+a + " and " +b+" is :"+c);
}
sum(3,4);

//Write a function that takes an integer minutes and converts it to seconds.
function minToSec(min){
    let sec=min*60;
    console.log(min+" minutes is equal to  "+sec+" seconds")
}
minToSec(20);

// //  function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj){
    let arr=[];
    arr.push(Object.entries(obj)); 
 console.log(arr)
}   
toArray({a:1,b:2})

// // Create a function that takes two numbers as arguments (num, length) and  
// // returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num,length){
    arr=[];
    for(let i=1;i<=length;i++){
        arr.push(num*i)
    }
    console.log(arr)

}
arrayOfMultiples(12,10)

// Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
function toCamelCase(str){
    let s1=""
    for(let i=0;i<str.length;i++){
        if(str[i]!="-" && str[i]!="_"){  
                if (str[i]==str[i] &&  (str[i-1]=="-" || str[i-1]=="_")){
                    s1+=str[i].toUpperCase();
                }
                    else{
                        s1+=str[i]
                   }
    }
}
console.log(s1)
}
toCamelCase("the_stealth_warrior")
