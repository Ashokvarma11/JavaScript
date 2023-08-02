let data=new XMLHttpRequest()
data.open('GET','https://fakestoreapi.com/products',true)

data.onload=function(){
    if(data.status===200){
        let items=JSON.parse(data.responseText)
        const card=document.createElement('div');
        card.className="grid"
        let str=``;
        for(let i of items){
            str+=`<div class="border fancy_card">
            <div class="align">
            <img src= "${i.image}" height="70px" width="80px"/>
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <h5>Price: ${i.price}$</h5>
            <h5>Rating: ${i.rating.rate}</h5>
            </div>
            </div>`;
}
card.innerHTML=str
document.body.appendChild(card)
    }
}
data.send()



