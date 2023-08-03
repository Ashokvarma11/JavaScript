//async and await promises

let data= async function(){
    let request= await fetch('https://fakestoreapi.com/products',{
     method:'GET'})
     let response= await request.json()
     console.log(response)
     let search=document.createElement('input') 
      search.className="search"
      search.placeholder="Search"
    
      let div=document.createElement('div')
      div.className="div"
      div.append(search)
      document.body.append(div)
    let parentDiv=document.createElement('div')
    parentDiv.className="parent"
    str=""
    
    response.map(function(element){
      return str+=`<div class="child fancy_card">
      <img src="${element.image}" class="img">
      <h1>${element.category}</h1>
      <h2>${element.title}</h2>
      <p>${element.description}</p>
      <p>Price:$${element.price}</p>
      <p>Rating:${element.rating.rate}</p>
      <p>Count:${element.rating.count}</p>
      </div>`
    })
    parentDiv.innerHTML=str
    document.body.append(parentDiv)
    
    search.addEventListener('input',function(e){
      searchelement=e.target.value
      str=""
      response.map(function(element){
        if(element.category.includes(searchelement)||element.title.includes(searchelement)||element.description.includes(searchelement)){
          return str+=`<div class="child">
          <img src="${element.image}" class="img">
          <h1>${element.category}</h1>
          <h2>${element.title}</h2>
          <p>${element.description}</p>
          <p>Price:$${element.price}</p>
          <p>Rating:${element.rating.rate}</p>
          <p>Count:${element.rating.count}</p>
          </div>` 
        }
      })
      parentDiv.innerHTML=str
    })
    document.body.append(parentDiv)
     
    }
    
    data();

//using then function for promises

// let request=fetch('https://fakestoreapi.com/products',{
//     method:'GET'
// })
// request.then((element)=>{
//     element.json().then((react)=>{
//         const card=document.createElement('div');
//         card.className="grid"
//         let str=``;
//         for(let i of react){
//             str+=`<div class="border fancy_card">
//             <div class="align">
//             <img src= "${i.image}" height="70px" width="80px"/>
//             <h2>${i.title}</h2>
//             <p>${i.description}</p>
//             <h5>Price: ${i.price}$</h5>
//             <h5>Rating: ${i.rating.rate}</h5>
//             </div>
//             </div>`;
// }
// card.innerHTML=str
// document.body.appendChild(card)
//     }
//     )
// })

