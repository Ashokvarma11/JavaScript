//Easy
// 6.Write a function that returns the string "something" joined with a space " " and the given argument a.
function addString(str){
    return "something"+" "+str

}
console.log(addString("isfishy"))

// 7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
console.log("---------------")

function addNum(a,b){
    if(a==10||b==10||a+b==10){
        return true       
    }
    else{
        return false
    }
}
console.log(addNum(5,5))

// 8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
console.log("---------------")
function equalChar(first,second){
    if(first.length==second.length){
        return true
    }
    else{
        return false
    }

}
console.log(equalChar("ashok","surampudi"))


//Medium
// 5.Create a function that moves all capital letters to the front of a word.
// 	Examples :

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

console.log("---------------")

function capToFront(str){
    finalString=""
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i].toLowerCase()){
            finalString+=str[i].toUpperCase()
        }
        else{
            finalString+=str[i].toLowerCase()
        }
    }

return finalString
}

console.log(capToFront("HaPpy"))

// 6.Count each occurrence of number(can not use predefined function).

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 1 present 2 times.
// 				   2 present 1 times.
// 				   3 present 2 times.
// 				   5 present 1 times …….  Etc
console.log("---------------")

function repeatNum(arr){
    newArr=[]
    newArr.push(arr[0])
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<newArr.length;j++){
            if(arr[i]==newArr[j]){
                count=count+1
            }
        }
        if(count==0){
            newArr.push(arr[i])
        }
    }
    //let s = new Set(arr)
    for(let k=0;k<newArr.length;k++){
        c=0
        for(let l=0;l<arr.length;l++){
            if(newArr[k]==arr[l]){
                c=c+1
            }

        }
        console.log(newArr[k]+" present "+c+" times")
       
    }
}
repeatNum([1,6,3,1,5,9,7,2,1,9,3,7,8,9,10])

//Hard

// 4.Create a function which takes in an encoded string and returns an object according to the following example:
// Examples :
// parseCode("John000Doe000123") ➞ {
// firstName: "John",
// lastName: "Doe",
// id: "123"
// }
// parseCode("michael0smith004331") ➞ {
// firstName: "michael",
// lastName: "smith",
// id: "4331"
// }

// parseCode("Thomas00LEE0000043") ➞ {
// firstName: "Thomas",
// lastName: "LEE",
// id: "43"
// }
console.log("---------------")

function parseCode(str){
   obj={}
    newString=str.split("0");
    newArr=[]
    for(let i=0;i<newString.length;i++){
        if(newString[i]!=''){
            newArr.push(newString[i])
        }
    }
    

    obj.firstname=newArr[0]
    obj.lastname=newArr[1]
      obj.id=newArr[2]
    return obj
}

console.log(parseCode("Thomas00LEE0000043"));


// 5.Create a function that takes the current day (e.g. "2022-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).
// Examples :
// currentStreak("2022-09-23", [
// {"date": "2022-09-18"},
// {"date": "2022-09-19"},
// {"date": "2022-09-21"},
// {"date": "2022-09-22"},
// {"date": "2022-09-23"}]) ➞ 3

// currentStreak("2022-09-25", [
// {"date": "2022-09-16"},
// {"date": "2022-09-17"},
// {"date": "2022-09-21"},
// {"date": "2022-09-22"},
// {"date": "2022-09-23"}]) ➞ 0

console.log("---------------")

function currentStreak(str,totalArr){
    dateArr=[]
    dateArr.push(new Date(str).getDate())
    for(let i=0;i<totalArr.length;i++){
        dateArr.push(new Date(totalArr[i].date).getDate())
    }
    dateArr.sort(function(a,b){return a-b})
    count=0;
    for(let j=dateArr.length-1;j>=0;j--){
        if(dateArr[j]-1==dateArr[j-1] || dateArr[j]==dateArr[j-1]){
            count=count+1
        }else{
            break;
        }

    }
    console.log(count)
}
currentStreak("2022-09-23", [
     {"date": "2022-09-18"},
     {"date": "2022-09-19"},
     {"date": "2022-09-21"},
    {"date": "2022-09-22"},
     {"date": "2022-09-23"}])

// let date= new Date("2022-09-18").getDate()
// console.log(date)