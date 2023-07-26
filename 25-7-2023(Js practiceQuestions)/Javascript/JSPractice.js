// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
let  greet = (name) => {
    return `Hi,${name}`;
  };
  console.log(greet("Ashok"));
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
console.log("----------------------");
function phnNum(str){
    formattedStr="("
    for(let i=0;i<str.length;i++){
        if(i==3){
            formattedStr+=")"
        }
        else if(i==6){
            formattedStr+="-"
        }
        formattedStr+=str[i]
    }
    return "formatted phone number is: "+formattedStr

}
console.log(phnNum("5555555555"))


// Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
console.log("----------------------")
function sortByLength(strArr){
    for(let i=0;i<strArr.length;i++){
        for(let j=0;j<strArr.length-1;j++){
            temp=strArr[j]
            if(strArr[j].length>strArr[j+1].length){
                strArr[j]=strArr[j+1]
                strArr[j+1]=temp
        }
    }
}
return strArr
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]))

//Medium
// Write a function that accepts an array of strings. Return the longest string(can not use predefined function).
// Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’] 							
//Output: Elephant
console.log("----------------------")
function arrOfStrings(arr){
    str=""
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length>str.length){
            str=""
            str+=arr[i]
        }
        else{
            str=str
        }
    }

console.log("longest string is "+`"${str}"`) 
}
arrOfStrings(['nik', 'mikhil', 'Cow','Elephant'] )

// Most Commonly Used two Character in String(can not use predefined function)
//Input: ‘Hii i am ram’
// Output; i, a 
console.log("----------------------")
function mostUsedChar(str){
    newStr=""
    for (let i = 0; i < str.length; i++) {
        if(str[i]!=" ") 
        newStr+=str[i] 
    }
    removeDup=""
    for (let j = 0; j < newStr.length; j++) {
        if(j==0){
            removeDup+=newStr[j]
        }
        count=0
        for (let k = 0; k < removeDup.length; k++) {
            if(newStr[j]==removeDup[k]){
                count=count+1
            }
        }
        if(count==0){
            removeDup+=newStr[j]
        }
    }
    let countArr={}
        for(let l=0;l<removeDup.length;l++){
            let c=0;
            for(let m=0;m<newStr.length;m++){
                if(removeDup[l]==newStr[m]){
                    c+=1 
                }        
            }
            countArr[removeDup[l]]=c       
        }     
      return countArr
}
console.log(mostUsedChar("hii i am ram"))




//Hard
// 6. Given a String(Note:- String Will Contain all later from A-Z except 1 letter, that letter you need to find out) :-
// Input string=“6 E @ f w 3 x y g N 1 o p Q A b c h i j # K l  d  m  R  T U V  Z”
// Output = ‘’S is missing from the String”
// Note:- (
// Time Complexity:- O(n) means only 1 loop you can use.
// without using any predefined function.
// )
console.log("----------------------")
let Inputstring="6 E @ f w 3 x y g N 1 o p Q A b c h i j # K l  d  m  R  T U V  Z"
let Allstring="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 for(let i=0;i<Allstring.length;i++){
    let count=0
    for(let j=0;j<Inputstring.length;j++){
        if(Allstring[i]==Inputstring[j] || Allstring[i].toLowerCase()==Inputstring[j]){
            count+=1
        }  
    }
    if(count==0){
        console.log("missing Alphabet is "+`"${Allstring[i]}"`)
    }
 }


// 7.  Given a string s, return the longest 
// Palindromic Substring
 
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"
console.log("----------------------")
function longestStr(pal){
    finalstr=""
    for (let i = 0; i < pal.length; i++) {
        for (let l = i; l < pal.length; l++) { 
            output=""
            revoutput=""     
            for (let j = i; j < l+1; j++) {
                output+=pal[j]
            }
            for (let k = output.length-1; k >=0 ; k--) {
                revoutput+=output[k]
            }
            if(output==revoutput && finalstr.length<revoutput.length ){
                finalstr=revoutput
            }
            else{
                finalstr=finalstr
            }
        }
}
console.log("longest palindrome string is : "+`"${finalstr}"`)           
}
longestStr("bbabd")





