let addToy = false;
let toys = []
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  getToyObjects()
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }

  });
});
function getToyObjects(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(data => {
    data.forEach(toyObject =>{
      
      const toyDiv = document.getElementById('toy-collection')
      const card = document.createElement('div')
      card.className = 'card'
      
card.innerHTML = toyObject.name
toyDiv.append(card)

const h2 = document.createElement('h2')
h2.className = ('Toy Name')
h2.innerText = (toyObject.name) 
// console.log(h2)
const img = document.createElement('img')
img.className = ('toy-avatar')
img.src = (toyObject.image)
// 

const pTag = document.createElement('p')
pTag.className = ("likes")
pTag.innerText = (toyObject.likes)

// 
let likes = toyObject.likes
const button = document.createElement('button')
button.className = ('like-btn')
button.id = (toyObject.id)
console.log(button)


card.append(h2,img,pTag,button)
button.addEventListener('click', ()=>{
likes ++
pTag.innerText = likes
console.log(likes)


fetch(`http://localhost:3000/toys/${toyObject.id}`,{
  method:'PATCH',
  headers: {
    'Content-Type':'application/json',
    Accept: "application/json"
  },
body: JSON.stringify({
  "likes": likes,
  
})
   })
  .then(res => res.json())
  .then(newLike => console.log(newLike))
  .catch(error => console.error(error))
})
  })
})
    
    
  
  .catch(error => console.error(error))

}

function newToyAdded(){
  const toyInput = document.querySelectorAll('.input-text')
  // console.log(toyInput[0].value)
fetch('http://localhost:3000/toys',{
  method: 'POST',
  headers:{
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({
    "name":toyInput[0].value,
    "image":toyInput[1].value,
    "likes": 0,

  })
})
  .then(res => res.json())
  .then(newToy => console.log(newToy))
  .catch(error => console.error(error))
}


function newLike(){

  const newLikeNumber = document.querySelectorAll('.likes')
  
  console.log(newLike)
}




  



  
