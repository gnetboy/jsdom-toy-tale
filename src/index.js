let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
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

function fetchToys(){
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(renderToys)
}
const toyCollection = document.getElementById('toy-collection')
function renderToys(toys) {
  toyCollection.innerHTML = ""
  toys.forEach(function (toy) {
    toyCollection.innerHTML += `
   <div class="card" data-id=${toy.id}>
        <h2>${toy.name}</h2>
        <img src="${toy.image}" class="toy-avatar" />
        <p>${toy.likes} Likes</p>
        <button class="like-btn">Like <3</button>
        <button class="delete-btn">Delete</button>
   </div>
  `
  })
}