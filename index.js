getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const rest = await res.json()
    
    for(let i = 0; i < 5; i++) {
        const div0 = document.getElementById("list");
  const div = document.createElement("div");
  div.className = "item-1";
  const p = document.createElement("p");
  p.textContent = rest[i].title;
  p.className = "item-text";
  
// КНОПКА DELETE
const button = document.createElement("button");
button.className = "delete-item";
button.addEventListener("click", async(e) => {
    e.preventDefault() 
  e.target.parentElement.remove();
  let userId = await e.target.id 
  
  await e.target.parentElement.remove() 
  deleteUser(userId) 
});

// // CHECKBOX
// const check = document.createElement("input")
// check.type = 'checkbox'
// check.addEventListener("click", (e) => {

//   if (!rest.completed === true) {
//     e.target.parentElement.className = "checkB";
//   } else {
//     e.target.parentElement.className = "item-1";
//   }
// });
       // ВЫВОД
       div.append(p, button);
       div0.prepend(div);
       input.value = "";
    }

}




deleteUser = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
    })
}

getTodo()