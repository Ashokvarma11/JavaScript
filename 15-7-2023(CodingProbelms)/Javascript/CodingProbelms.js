//To find given no is prime or not

let n=prompt("Enter number");
let count=0;
for(let i=1;i<n;i++){
    if(n%i==0){
        count+=1;
    }
}
if(count==1){
    console.log(n+" is prime number")
}
else{
    console.log(n+" is not a prime number")

}

// Approch1: To find lcm of 2 numbers using for loop

console.log("-----------------------");
let num1=window.prompt("Enter the number1 to find lcm");
let num2=window.prompt("Enter the number2 to find lcm");
num1>num2?num3=num1:num3=num2;
num1<num2?num4=num1:num4=num2;
for(let i=1;i<=num3;i++){
    if((num3*i)%num4==0){
        console.log("LCM of "+num1+" and "+num2+" is :"+num3*i);
        break;
    }   
}

//Approch 2: To find lcm of 2 numbers using gcd

num1>num2?num3=num1:num3=num2;
num1<num2?num4=num1:num4=num2;
let gcd;
for(let i=1;i<=num4;i++){
    if(num1%i==0 && num2%i==0){
       gcd=i;
    }
}
console.log((num1*num2)/gcd);




//To print aplabets with count

console.log("-----------------------");
let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let s="";
for(let i=0;i<alpha.length;i++){
    s+=alpha[i]+(i+1)+" ";
}
console.log(s);

// Approach 1: To find missing number in an array

console.log("-----------------------");
let n2=5;
let arr=[2,3,1,4]
count=0;
actualcount=0;
for(let i=0;i<arr.length;i++){
    count+=arr[i]
    if(i<=0){
        for(let j=1;j<=n2;j++){
            actualcount+=j;
        }
    }
}
console.log(arr);
console.log("In above array missing number in array is :"+(actualcount-count))

// Approach 2: To find missing number in an array 

let newarr=[]
for(let i=1;i<=n2;i++){
    newarr.push(i)
}
for(let i=0;i<n2;i++){
    if(arr.includes(newarr[i])==0){
        console.log("In above array missing number in array is :"+newarr[i])
    }
}


// Approach 1: To count vowels and constonants

console.log("-----------------------");
let vowels="AEIOUaeiou";
let str=window.prompt("Enter string to find vowels and consonatns count");
vowels_count=0;
consonants_count=0;
for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        vowels_count+=1;
    }   
    else if(str[i]==" "){

    }
    else{
        consonants_count+=1;  
       
}
}
console.log("In "+str+" there are : "+vowels_count+"vowels"+","+consonants_count+"consonants");

// Approach 2: To count vowels and constonants
let vow_count=0;
let con_count=0;
for(let i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            vow_count+=1
        }
        else if(str[i]==" "){

        }
        else{
            con_count+=1;
        }
    }
console.log("In "+str+" there are : "+vow_count+"vowels"+","+con_count+"consonants");




//To insert an element in an array in specific index

console.log("-----------------------");
let array= [1,2,3,4,5,7,8,9,10];
console.log("Before adding element:")
console.log(array);
let insertIndex=5;
let insertNumber=6;
array.splice(insertIndex,0,insertNumber);
console.log("After adding element:")
console.log(array);


//To find the occurance of number in an array

console.log("-----------------------");
let array1=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];
let noToFind=7;
let c=0;
for(let i=0;i<array1.length;i++){
    if(array1[i]==noToFind){
        c+=1
    }
}
console.log(array1);
console.log("In above array "+noToFind+" present "+c+" times")


//To reverse the number

console.log("-----------------------");
let number=123;
let quotient=123;
let reverse=0;
let reminder=0;
while(quotient>0){
    reminder=quotient%10;
    reverse=reverse*10+reminder;
    quotient=parseInt(quotient/10);

}
console.log("Reverse of "+number+" is "+reverse);

//To reverse the number taking it as string

let number1=prompt("Enter the no to reverse");
str=""
for(let i=number1.length-1;i>=0;i--){
    str+=number1[i];
}
console.log(str);
