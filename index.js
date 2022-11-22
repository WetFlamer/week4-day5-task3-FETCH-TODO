const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const rest = await res.json();

  // GET
  for (let i = 0; i < 2; i++) {
    const list = document.getElementById("list");
    const div = document.createElement("div");
    div.className = "item-1";
    const p = document.createElement("p");
    p.className = "item-text";
    p.textContent = rest[i].title;

    // DELETE-BUTTON
    const delete_button = document.createElement('button')
    delete_button.className = 'delete-item'

    delete_button.addEventListener('click', () => {
        deleteTodo(rest.id, div)
    })


// CHECK-BOX

const check = document.createElement('input')
check.checked = rest[i].completed
check.type = 'checkbox'
check.addEventListener('change', (e) => {
    editTodo(rest.id, rest)
    if(!rest.completed) {
        e.target.parentElement.className = 'checkB'
    } if(rest.completed)    {
        e.target.parentElement.className = 'item-1'
    }
})

    // ВЫВОД
    div.append(p, delete_button, check);
    list.append(div);
  }
};
getTodo();


deleteTodo = async (id, parentElement) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        console.log("Дело удалено")
        parentElement.remove()
    }

    
}
// ИЗМЕНЕНИЕ
editTodo = async (id, r) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            completed: true
        })
    })
    if(res.ok) {
        console.log('Изменено')
        r.completed = !r.completed
    }
}


// ФУНКЦИЯ-ДОБАВЛЕНИЯ
addTodo = async (text) => {
    const res = fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            title: text,
            completed: false
        })

    })
    if(res.ok) {
        console.log('Дело добавлено')
    }
}

// ДОБАВЛЕНИЕ TODO
const input = document.getElementById('input')
const addButton = document.getElementById('add-button')
addButton.addEventListener('click', () => {
    addTodo(input.value)
    getTodo()
})