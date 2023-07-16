
//To find largest among 3 numbers using terenary Operator
console.log("To find largest among three numbers");
console.log("------------------");
let  inputs= prompt("Enter 3 values separated by space to find largest among them").split(" ");
console.log(inputs);
inputs[0]>inputs[1] && inputs[0]>inputs[2] ? console.log("the largest among "+inputs[0]+" "+inputs[1]+" "+inputs[2]+" is "+inputs[0]): inputs[1]>inputs[2]?console.log("the largest among "+inputs[0]+" "+inputs[1]+" "+inputs[2]+" is "+inputs[1]):console.log("the largest among "+inputs[0]+" "+inputs[1]+" "+inputs[2]+" is "+inputs[2]);

//To find factorial of given number
console.log("------------------");
console.log("To find factorial of given number")
console.log("------------------");
let n=window.prompt("Enter the number to find factorial of it");
let sum=1;
for(let i=1;i<=n;i++){
    sum*=i;  
}
console.log("Factorial of "+n+" is :"+sum);

//sorting an array in ascending order
console.log("------------------");
console.log("To sort the array");
console.log("------------------");
// let array=prompt("enter values in array to sort the array").split(" ");
let array=[2,3,1,5,4]
console.log(array);
for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        temp=array[j];
        if(array[j]>array[j+1]){
            array[j]=array[j+1];
            array[j+1]=temp;
        }  
    }
}
console.log(array);

//Pattern printing
console.log("------------------");
console.log("To print pattern")
console.log("------------------");
let rows=5;
for(let i=1;i<=rows;i++){
    let s="";
    for(let j=1;j<=i;j++){
        s+=" "+j;
    }
    console.log(s);
}

//To print power of the given number using loop
console.log("------------------");
console.log("To find power of the number")
console.log("------------------");
let num=window.prompt("Enter the number");
let num1=window.prompt("Enter the power of number to raise");
let s=1;
for(let i=1;i<=num1;i++){
   s*=num
}
console.log(num+" power "+num1+" is : "+s);
