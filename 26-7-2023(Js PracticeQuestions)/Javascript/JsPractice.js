
//Easy
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 12], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
function findLargestNums(arr){
    finalarr=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            count=0
            for (let k = 0; k < arr[i].length; k++) {
                if(arr[i][j]>arr[i][k]){
                    count++
                }
                
            }
            if(count==arr[i].length-1){
                finalarr.push(arr[i][j])
            }
        }
    }
    console.log(finalarr)
}
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])


//by sorting 
function findLargestNums(arr){
    finalarr=[]
    for(let i=0;i<arr.length;i++){
        arr[i].sort(function (a,b){
            return a-b
        })
        finalarr.push(arr[i][arr[i].length-1])
    }
    console.log(finalarr)
}
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])

// Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

console.log("-----------------------------")
function secondLargest(arr){
    for(let i=0;i<arr.length;i++){
        count=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]>arr[j]){
                count++
            }
        }
        if(count==arr.length-2){
            console.log(arr[i])
        }
    }

}
secondLargest([10, 40, 30, 20, 50])


//Using sorting method
function secondLargest(arr){
        arr.sort(function (a,b){
            return a-b
        })
        console.log(arr[arr.length-2])
}
secondLargest([10, 40, 30, 20, 50])



// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// arr=[...new Set(arr1)] using set 
console.log("-----------------------------")

function removeDups(arr1){
        let arr=[]
        arr.push(arr1[0])
        for(let i=1;i<arr1.length;i++){
            let count=0;
            for(let j=0;j<arr.length;j++){
                if(arr1[i]==arr[j]){
                    count++
                }   
            }
            if(count==0){
                arr.push(arr1[i])
            }
        }
        console.log(arr)
    }
removeDups([1, 0, 1, 0])

//Medium
// Write Program to remove duplicate elements in an array and sort it in descending order(can not use predefined function).

// 	Input: [5,3,5,2,1,1,7,3,5,6]
// 	Output: [7,6,5,3,2,1]
console.log("-----------------------------")

function sortDec(arr1){
    let arr=[]
    arr.push(arr1[0])
    for(let i=1;i<arr1.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr1[i]==arr[j]){
                count++
            }   
        }
        if(count==0){
            arr.push(arr1[i])
        }
    }
   for(let k=0;k<arr.length;k++){
    for(let j=0;j<arr.length-1;j++){
        temp=arr[j]
        if(arr[j]<arr[j+1]){
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
   }
console.log(arr)
    }
sortDec([5,3,5,2,1,1,7,3,5,6])

// Write a Program to Remove brackets from an algebraic expression(can not use predefined function).

// 			Input: a + b-(9+c)=3
// 			Output: a + b- 9+c=3
console.log("-----------------------------")

let input="a+b-(9+c)=3";
let output=""
for(let i=0;i<input.length;i++){
    if(input[i]==")" || input[i]=="("){
        continue;
    }else{
        output+=input[i]
    }
}
console.log(output)


// // Hard
// // 8.  Given an unsorted array of integers nums, return the length of    the longest consecutive elements sequence.
// // You must write an algorithm that runs in O(n) time.
// // Input: nums = [100,4,200,1,3,2]
// // Output: 4
// // Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// // Input: nums = [0,3,7,2,5,8,4,6,0,1]
// // Output: 
console.log("-----------------------------")

function longestSeq(arr){
    arr.sort(function (a,b){
        return a-b
    })
    count=1
    for(let i=0;i<arr.length;i++){
        if(arr[i]+1==arr[i+1]  ){
            count++
        }
        else if(arr[i]==arr[i+1]){
            count=count
        }
        else{
            break;
        }
    }
    console.log(count)

}
longestSeq([100,4,200,1,3,2])


//9. Take an array of strings and create a dropdown using array values  the values  
//of dropdown should be taken dynamically and if we select a value in dropdown and
// the length of dropdown value is even it should show 1 in console or else if it is odd it should 0.
console.log("-----------------------------")
stringarray=["ashok","chandrika","srinivas","mangaratnam"]

let sel=document.createElement('select')
sel.id="drop"
sel.onchange=getValue
let d=""
for(let i=0;i<stringarray.length;i++){
    d+=`<option value=${stringarray[i]}>${stringarray[i]}</option>`
}
sel.innerHTML=d
document.body.appendChild(sel)

function getValue(){
    let selector=document.getElementById("drop")
    var option = selector.options[selector.selectedIndex];
    
    if(option.value.length%2==0){
        console.log("value is "+option.value)
        console.log("length of value is "+(option.value.length))
        console.log(1)
    }
    else{
        console.log("value is "+option.value)
        console.log("length of value is "+(option.value.length))
        console.log(0)
    }
}




