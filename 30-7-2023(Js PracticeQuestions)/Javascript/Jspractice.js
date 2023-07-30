
// If subseq's  array  sequence is present in the array, returns true or else returns false.                                                    
// Let arr = [5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
// Example: 
//    Input : Subseq1 = [7, -1, 5, -3]     Output: true
//            Subseq2 = [7, -1, 4, -3]           : false
//            Subseq3 = [ -1]                    : true
//            Subseq4 = [13, -3, 4, 1]           : false

console.log("---------------------------")
function subArray(arr,subarr){
    l=subarr.length
    str=""
    for(let i=0;i<arr.length;i++){
        arr1=arr.slice(i,l+i)
        count=0
        for(let j=0;j<subarr.length;j++){
            if(arr1[j]==subarr[j]){
                count++
            }
        }
        if(count==subarr.length){
            str=""
            str+="true"
            break;
        }
        else{
            str=""
           str+="false"
        } 
    }
    console.log("given substring is present : "+str)
}
subArray([5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4], [7, 3, 2]);



// Find sum of the Unique numbers: 
// Example : Let arr = [1, 2, 2, 1, 3, 5, 1];
//  The unique numbers are 1,2, 3, 5 so the sum should be 11.
console.log("---------------------------")
function uniquesum(arr){
    arr1=[]
    sum=0
    for(let i=0;i<arr.length;i++){
        count=0
        for(let j=0;j<arr1.length;j++){
           if(arr[i]!=arr[j]){
            count++
           }
        }
        if(count==arr1.length){
            arr1.push(arr[i])
            sum+=arr[i]
        }
}
console.log("sum of unique numbers is "+sum)
}
uniquesum([1, 2, 2, 1, 3,5])




// Create a function that moves all capital letters to the front of a word.
// 	Examples :

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
console.log("---------------------------")
function allCaptial(str){
    us=""
    ls=""
    for(let i=0;i<str.length;i++){
        //str[i]==str[i].toUpperCase()?us+=str[i]:ls+=str[i]
        if(str[i]==str[i].toUpperCase()){
            us+=str[i]
        }
        else{
            ls+=str[i]
        }
    }
    console.log(us+ls)
}
allCaptial("hApPy")



// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Example:

// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

console.log("---------------------------")
function uniqueNum(arr){
    let arr1=[...new Set(arr)]
    for(let i=0;i<arr1.length;i++){
        let count=0
        for(let j=0;j<arr.length;j++){
            if(arr1[i]==arr[j]){
                count++
            }
        }
        if(count==1){
            console.log("unique number in  array is "+arr1[i])
        }
    }
}
uniqueNum([2, 2, 2, 3, 4, 4, 4])

// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:

// charCount("c", "Chamber of secrets") ➞ 1
console.log("---------------------------")
function charCount(char,str){
    count=0
    for(let i=0;i<str.length;i++){
        if(str[i]==char){
            count++
        }
    }
    console.log("count of "+char+" in "+str+" is " +count)

}
charCount("c", "Chamber of secrets")
