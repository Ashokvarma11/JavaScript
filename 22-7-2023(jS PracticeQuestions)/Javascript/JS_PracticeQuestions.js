// Easy
//3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function numInc(num){
    num=num+1
    return num

}
console.log(numInc(5))

//Create a function that takes the age in years and returns the age in days.

function age(years){
    days=years*365
    return days

}
console.log(age(5))
//sniCreate a function that takes voltage and current and returns the calculated power

function calPower(voltage,current){
    power=voltage*current
    return power

}
console.log(calPower(5,6))


//medium
// 3.create the function that takes an array with objects and returns the sum of people's budgets.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600

let total=0;
function getBudgets(people){
  
    for(let i=0;i<people.length;i++){
       total+= people[i].budget
    }
    return total   
}
console.log( getBudgets([
       { name: "John",  age: 21, budget: 29000 },
       { name: "Steve",  age: 32, budget: 32000 },
     { name: "Martin",  age: 16, budget: 1600 }
    ]) )

   
    
// 4.Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If a student has no notes (an empty array) then let's assume avgNote: 0.
// Example :

// [
// { name: "John", notes: [3, 5, 4]}
// ] ➞ [
// { name: "John", avgNote: 4 }
// ]

function avgNote(arr){
    let arr1=[]

    for(let i=0;i<arr.length;i++){
        s=0;
        let property_names = (Object.keys(arr[i]));//[name,notes]
        let property_values = (Object.values(arr[i]));//[ashok],[1,2,3,6]
        l=arr[i].notes
        for(let j=0;j<l.length;j++){
            s+=arr[i].notes[j]
        }
        avgnotes=s/(l.length)
        arr1.push(`{${property_names[0]}:"${property_values[0]}", avgNote: ${avgnotes}}`);

}
console.log(arr1)
}
avgNote([
    { name: "John", notes: [3, 5, 4]},{name:"ashok",notes:[1,2,3,6]}
])


//Hard
//2.Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.	
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]


//using array of numbers 
console.log("------using array of numbers------")

function numInStr(stringArr){
    numArr=["1","2","3","4","5","6","7","8","9","0"];
    arr1=[]
    for(let i=0;i<stringArr.length;i++){
        count=0
        for(let j=0;j<numArr.length;j++){
            if(stringArr[i].includes(numArr[j])){
                count++       
        }
        } 
        if(count!=0){
            arr1.push(stringArr[i])       
    }
}
return arr1;
}
console.log(numInStr(["1a","a2a","b2","b"]));

//using ascii values
console.log("------using ASCII values------")
function numInStr2(strArr){
arr1=[]
for(let i=0;i<strArr.length;i++){
    count=0
    for(let j=0;j<strArr[i].length;j++){
        if(strArr[i].charCodeAt(j)<60){
           count++
        }
}
if(count>0){
    arr1.push(strArr[i])
}
}
return arr1
}
console.log(numInStr2(["1a","a2a","b2","b"]));


console.log("------using regex expression------")
//using regex expression
function filterArr(arr){
    arr1=[]
    for(let i=0;i<arr.length;i++){
        if(/\d/.test(arr[i])){
            arr1.push(arr[i])
        }
    }
    return arr1
 }
 console.log(filterArr(["1a","a2a","b2","b"]));

// 3.Write a function that takes a list of hours and returns the total weekly salary.
// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

// Examples :
// weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400
// weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410
// weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280


function sum(arr){
    let s=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<=8 && i<5){
        s=s+(arr[i]*10)
    }
    else if(arr[i]>8 && i<5){
        s+=(arr[i]*10)+((arr[i]-8)*5)
    }
    else{
        if(arr[i]>8){
            s+=(((arr[i]*10)+((arr[i]-8)*5))*2)
        }
        else{
            s+=arr[i]*20
        }
    }
}
console.log(s);
}
sum([0, 0, 0, 0, 0, 12, 0])


