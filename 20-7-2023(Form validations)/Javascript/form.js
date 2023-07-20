

let firstName=document.getElementById("name")
let email=document.getElementById("email")
let degree=document.getElementById("degree")
let phone=document.getElementById("phone")
let yop=document.getElementById("yop")
let status=document.getElementById("status")
let error1=document.getElementById("error1")
let error2=document.getElementById("error2")
let error3=document.getElementById("error3")
let error4=document.getElementById("error4")
let error5=document.getElementById("error5")
let error6=document.getElementById("error6")
let final=document.getElementById("final")


//Field to field validation
firstName.addEventListener('input',function(){
    if(firstName.value.length<3){
        document.getElementById("error1").style.color="red"
        document.getElementById("error1").innerText="please enter valid name"
    }
    
    else{
        document.getElementById("error1").innerText=""

    }
})
email.addEventListener('input',function(){
    if(!email.value.includes("@")){
        document.getElementById("error2").style.color="red"
        document.getElementById("error2").innerText="please enter mail id ig:abc@gmail.com"
    }
    else{
        document.getElementById("error2").innerText=""
    }
})
phone.addEventListener('input',function(){
    if(phone.value.length!=10){
        document.getElementById("error3").style.color="red"
        document.getElementById("error3").innerText="Enter 10 digit number"
    }
    else{
        document.getElementById("error3").innerText=""
    }
})

degree.addEventListener('input',function(){
    if(/\d/.test(degree.value))//to check it string contains atleast one charactor
    {
        error4.innerText="Enter only text"
        error4.style.color="red"
    }
    else{
        error4.innerText=""
    }
})


function signUp(){
    document.getElementById("final").innerText="Thank you! we will soon contact you"
}



//Enter validation
// function signUp(){
//     if(firstName.value.length<3){
//         error1.style.color="red"
//         error1.innerText="Enter valid name"
//     }
//     else if(!email.value.includes("@")){
//         error2.style.color="red"
//         error2.innerText="Enter valid email eg:abc@gmail.com"
//     }
//      else if(/\d/.test(degree.value))
//      {
//          error4.innerText="Enter only text"
//          error4.style.color="red"
//      }
    
//     else{
//         error1.innerText=""
//         error2.innerText=""
//         error4.innerText=""
//         final.innerText="Thank you! Your response has been submitted."
//     }
// }
