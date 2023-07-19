
//Click Events
//Giving onclick to button and creating function in js
function addFriend(){
    if( document.getElementById("btn1").textContent=="Add Friend"){
        document.getElementById("btn1").textContent="added"
    }
    else
    {
        document.getElementById("btn1").textContent="Add Friend"
    }
}

//creating button and function in js 
let btn=document.getElementById("btn")
btn.onclick=myButton
function myButton(){
    if( document.getElementById("btn").textContent=="SUBSCRIBE"){
        document.getElementById("btn").textContent="SUBSCRIBED"
    }
    else
    {
        document.getElementById("btn").textContent="SUBSCRIBE"
    }
}

//By using eventListener
let btn3=document.getElementById("btn3")
btn3.addEventListener('click',function(){
    alert("event listener clicked")
})

//Double click event
let btn4=document.getElementById("btn4")
btn4.addEventListener('click',function(){
    document.getElementById("btn4").textContent="Double Clicked"
})


//Mouse Events
let head=document.getElementsByClassName("head")[0]
head.addEventListener('mouseover',function(){
    head.style.color="red"
})

let head1=document.getElementsByClassName("head")[0]
head1.addEventListener('mouseout',function(){
    head.style.color="green"
})

let para=document.getElementById("para")
para.addEventListener('mousedown',function(){
    para.style.fontStyle="italic"
})
let para1=document.getElementById("para")
para1.addEventListener('mouseup',function(){
    para1.style.fontStyle="normal"
})


//Form Events
//input event validates each value by value
function inputFunction() {
  let enteredvalue= document.getElementById("myInput").value;
  document.getElementById("span").innerText = "You wrote: " + enteredvalue;
}

//change event validates after entering the total value
let y= document.getElementById("numInput")
y.addEventListener('change',function(){
    if(y.value.length<10){
     document.getElementById("num").innerText = "Your number is invalid";
       
    }
    else{
        document.getElementById("num").innerText = "";

    }
})

//focus event triggers when its get focused
y.addEventListener('focus',function(){

    y.style.outline="1px solid red"
    }
 )

 //blur event triggers when focus is not triggered
 y.addEventListener('blur',function(){
    y.style.outline="1px solid green"

    }
 )

 //Keyboard events
 function keyDown() {
    document.getElementById("down").innerHTML = "down key is pressed";
  }

  function keyUp() {
    document.getElementById("up").innerHTML = "up key is pressed";
  }


  //page Events
//resize event
  window.addEventListener('resize',function(){
    if(this.window.innerWidth>360 && this.innerWidth<500){
        document.body.style.backgroundColor="red"
        }
    else if(this.window.innerWidth>500 && this.innerWidth<800){
        document.body.style.backgroundColor="green"
    }
    else{
        document.body.style.backgroundColor="blue"

    }
   
  })

  //scroll event
  window.addEventListener('scroll',function(){
    if( this.scrollY<500){
        document.body.style.backgroundColor="yellow"
        }
    else {
        document.body.style.backgroundColor="pink"
    }
     
  })



  










