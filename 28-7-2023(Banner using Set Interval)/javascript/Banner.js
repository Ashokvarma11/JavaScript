let arr=[{
    "id":1,
    "image":"../Images/car1.jpeg"
},{
    "id":2,
    "image":"../Images/images.jpeg" 
},{
    "id":3,
    "image":"../Images/car3.jpeg"
}]

        let i=0;
        setInterval(function(){
            let image=document.getElementById("image")
            image.src=arr[i].image
            document.body.appendChild(image);
            i++;
            if(i==arr.length){
                i=0;
            }
        },2000)


