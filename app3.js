let todoArr = [];
let editIndex = null;

let searchField = document.querySelector(".searchField");
let todoBtn = document.querySelector(".todoBtn");

todoBtn.addEventListener("click", () => {
  let searchValue = searchField.value.trim();

  if (searchValue.length === 0) {
    return alert("bhaaai field bharo pehle");
  }

  if (editIndex !== null) {
    // UPDATE case
    todoArr.splice(editIndex, 1, searchValue);
    editIndex = null;
    todoBtn.innerText = "Add";
  } else {
    // ADD case
    todoArr.push(searchValue);
  }

  searchField.value = "";
  renderTodos();
});

function renderTodos() {
  const showArea = document.querySelector(".showTodo");
  showArea.innerHTML = "";

  todoArr.forEach((elem, index) => {
    let ol = document.createElement("ol");

    ol.setAttribute("id", index);
    ol.classList.add("olTodoList");

    ol.innerHTML = `
      <li>${index + 1}. ${elem}</li>
      <button onclick="editHandler(this)">Edit</button>
      <button onclick="deleteHandler(this)">Delete</button>
    `;

    showArea.appendChild(ol);
  });
}

function deleteHandler(deleteTodo) {
  const id = deleteTodo.parentElement.id;
  todoArr.splice(id, 1);
  renderTodos();
}

function editHandler(specificTodo) {
  const id = specificTodo.parentElement.id;
  const value = specificTodo.parentElement.children[0].innerText;

  searchField.value = value.replace(/^\d+\.\s/, ""); // remove "1. " from beginning
  editIndex = +id; // convert to number
  todoBtn.innerText = "Update";
}
