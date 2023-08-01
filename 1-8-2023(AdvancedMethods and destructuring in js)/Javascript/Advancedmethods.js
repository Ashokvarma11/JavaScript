//for of loop
//for of loop was introduced in ES6 to iterate over array and strings

//Example 1
let arr1=[12,7,3,10]
for(let x of arr1){
    console.log(x)
}

//Example 2
//printing largest number from array using for-of loop
console.log("------------------")
let x1=0
for(let x of arr1){ 
    if(x1>x){
        x1=x1
    }
    else{
        x1=x
    }
}
console.log("largest number in array is "+x1)

//Example 3
//Printing smallest number in an array
console.log("------------------")
let x2
for(let x of arr1){ 
    if(x2<x){
        x2=x2
    }
    else{
        x2=x
    }
}
console.log("smallest number in array is "+x2)



//for in loop
//for in loop is used to iterate over the objects
//Example 1
console.log("------------------")
obj1={
    name:"ashok",
    age:23,
    place:"east",
    contact: {
        phone: "989045858",
        email: "ajaa@xyz.com",
        address: {
            city: "hyd",
            country: "india"
        }
    }
}

for(let x in obj1){
    console.log(obj1[x])
}

//Example2
//If the salaries are more than 20000 increment is 10% and update salary and greater than
//50000 will get increment 20%
console.log("------------------")
const salaries= {
    Jack : 24000,
    Paul : 34000,
    king : 55000
}
console.log("before updating")
console.log(salaries)
for ( let x in salaries) {
    if(x>20000){
        salaries[x]=salaries[x]+(salaries[x]*10)/100
    }
    else{
        salaries[x]=salaries[x]+(salaries[x]*20)/100
    }
}
console.log("after updating")
console.log(salaries)



//spread and rest operators

//Example1
//to print maximum number from array
console.log("------------------")
let array=[1,2,5,6,3]
console.log("max element in given array is "+Math.max(...array))

//Example2
console.log("------------------")

function spread(one,two){
    console.log(one)
    console.log(two)

}
spread(...array)

//Example3
console.log("------------------")
function rest(first,...rem){
    console.log(rem)
}
rest(...array)


//Destructing in array and objects
//arrays destructuring
let studentDetails=['ashok',23,'ece','male']

let [,age]=studentDetails// to get second element from array
console.log(age)

let [name,years,...remaining]=studentDetails
console.log(remaining)//to get remaining elements from an array

//destucturing Objects
const obj2={
    firstname:"ashok",
    born:2001,
    city:"east",
}

//accessing elements from objects
let {firstname}=obj2
console.log(firstname)

let {born}=obj2
console.log(born)





