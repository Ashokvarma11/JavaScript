//Arrays is collection of data 
//Arrays can be initialized in two ways
// 1. By constructor ---> let arr=new arr("ashok","mangaratnam","chandrika","srinivas")
// 2. By literal way -->  let arr=["ashok","mangaratnam","chandrika","srinivas"] 

//1.push method
// push method is used to add the element to array at last index
let arr = ["ashok", "mangaratnam", "chandrika", "srinivas"];
arr.push("varma");
console.log(arr);//varma is added in the last element of the array.

//2.pop method
//It will removes the last element of the array
arr.pop()
console.log(arr)

//3.slice method
//It will removes the elements in array and stores them in new array.
//slice(startindex, endindex);
arr.slice(1, 3);
console.log(arr); // slice methods will not disturb original array instead it stores in new array

let arr1 = arr.slice(1, 3);
console.log(arr1);

//4.indexOf
//It will give the index of the element in the array if not exists returns -1

console.log(arr.indexOf("srinivas"));// returns 3 as index of element srinivas is 3

//5.includes 
//It will check the element you have given is there in array or not.If it elements it returns boolean value true otherwise false

console.log(arr.includes("mangaratnam"));// it returns true as element exists


//6.toString()
//It will convert the array into string
console.log(arr.toString());

//7.join method
//It will convert the array into string and we can specify how to divide the elements in it 
console.log(arr.join(" "));//elements are converted to string and each element is divided by space 


//8.shift method
//It is used to remove the first element in the  array.
arr.shift();
console.log(arr);

//9.unshift method
//It is used to add the elements in the starting of an array.
arr.unshift("varma");
console.log(arr);

//10.splice method
//It is used to delete the items same as slice but splice modifies the original array
//splice(startindex,countof items u want to delete)
// arr= ['varma', 'mangaratnam', 'chandrika', 'srinivas']
arr.splice(1, 2);// deletes 2 elements from index1 including index1
//after deleting elements arr=['varma', 'srinivas']
console.log(arr);
//to add elements in between
//splice(startindex,delcount, elements)
arr.splice(1, 0, "chandrika", "mangaratnam");
console.log(arr);


//11.sort()
//It is used to sort the elements in ascending or descending order
//It will modify the original array
//It will sort according to first digit of element
let arr2 = [10, 3, 25, 2, 6, 1];
console.log(arr2.sort());

//arr.sort(function(a,b){ 
//     return a-b;              
// }) ----> This will sort array in correct order

//negative value ,0, postive value

let arr3 = [3, 10, 25, 2, 6, 1];
arr3.sort(function (a, b) {
    return a - b;
})
console.log(arr3);

//sorting using for loop
let num = [3, 10, 25, 2, 6, 1];
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
        temp = num[j]
        if (num[j] > num[j + 1]) {
            num[j] = num[j + 1]
            num[j + 1] = temp;
        }
    }
}
console.log(num);

//Ignoring the case
let arr4 = ["ashok", "ash", "varma", "raj"];
console.log(arr4.includes("Raj".toLowerCase()));

//Ignoring the case using array with lowercase
let arr5 = ["Ash", "baswA", "varma", "RaJ"];
let arr6 = [];

for (let i = 0; i < arr5.length; i++) {
    arr6.push(arr5[i].toLowerCase())
}
console.log(arr6);
console.log(arr6.includes("AsH".toLowerCase()));

//Examples
let array = [1, "ashok", "world", 4, "varma", 819, "hello"];
array.push("html")
array.push("css");
array.push("js");
array.push("react");
console.log(array)

array.pop();
array.pop();
array.pop();
array.pop();
console.log(array);

console.log(array.slice(1, 2));
console.log(array.slice(2, 4));
console.log(array.slice(0, 3));
console.log(array.slice(3, 5));

console.log(array.indexOf(4));
console.log(array.indexOf("raj"));
console.log(array.indexOf(819));
console.log(array.indexOf(1));

console.log(array.includes(1));
console.log(array.includes("Hello"));
console.log(array.includes("varma"));
console.log(array.includes(819));

array.unshift("chandrika");
array.unshift(5);
array.unshift("srinivas");
array.unshift(0);
console.log(array);

array.shift();
array.shift();
array.shift();
array.shift();
console.log(array);

let arr7=["ashok",1,"hello",2,4,"world",6];
arr7.splice(1,2);
arr7.splice(1,3);
arr7.splice(0,1);
console.log(arr7);

let arr8=["ash","hello","world","ok"];
console.log(arr8.toString());
console.log(arr8.join(":"));
console.log(arr8.join(","));
console.log(arr8.join(";"));