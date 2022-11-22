const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const rest = await res.json();

  // GET
  for (let i = 0; i < 5; i++) {
    const list = document.getElementById("list");
    const div = document.createElement("div");
    div.className = "item-1";
    const p = document.createElement("p");
    p.className = "item-text";
    p.textContent = rest[i].title;

    // DELETE-BUTTON
    const delete_button = document.createElement('button')
    delete_button.className = 'delete-item'

// CHECK-BOX
const check = document.createElement('input')
check.type = 'checkbox'

    // ВЫВОД
    div.append(p, delete_button, check);
    list.append(div);
  }
};
getTodo();
