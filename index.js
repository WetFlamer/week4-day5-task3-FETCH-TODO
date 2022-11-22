getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const rest = await res.json();

  for (let i = 0; i < 5; i++) {
    const div0 = document.getElementById("list");
    const div = document.createElement("div");
    div.className = "item-1";
    const p = document.createElement("p");
    p.textContent = rest[i].title;
    p.className = "item-text";

    // КНОПКА DELETE
    const button = document.createElement("button");
    button.className = "delete-item";
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      e.target.parentElement.remove();
      let userId = await e.target.id;

      await e.target.parentElement.remove();
      deleteUser(userId);
    });

    // CHECKBOX
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = rest.completed
    check.addEventListener("change", (e) => {
        edit(rest.id, rest)
      if (rest.completed) {
    
        e.target.parentElement.className = 'checkB'
      } else {
        p.style.textDecoration = "line-through";
        e.target.parentElement.style.opacity = "0.5";
      }
    });
    // ВЫВОД
    div.append(p, button, check);
    div0.prepend(div);
    input.value = "";
  }
};

deleteUser = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
  });
};

getTodo();

const edit = async (id, key) => {
    const res = await fetch(`${USERS_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: true })
    })
    if (res.ok) {
        console.log("Изменено")
        key.completed = !key.completed
    }
}
const addTodo =  async (text) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({title: text, completed: false})
    })
    const rest = res.json()
}

const inp = document.getElementById('input')
const button = document.getElementById('add-button')
button.addEventListener('click', () => {
    const div0 = document.getElementById('list')
    const div = document.createElement('div')
    const del = document.createElement('button')
    del.className = "delete-item";
    div.className = 'item-1'
    const p = document.createElement('p')
    p.textContent = addTodo(inp.value)

    // КНОПКА DELETE
    const button = document.createElement("button");
    button.className = "delete-item";
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      e.target.parentElement.remove();
      let userId = await e.target.id;

      await e.target.parentElement.remove();
      deleteUser(userId);
    });

    div.append(p, del)
    div0.append(div)

})