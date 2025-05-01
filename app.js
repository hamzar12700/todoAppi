let todoArr = [];

let searchField = document.querySelector(".searchField");
let todoBtn = document.querySelector(".todoBtn");

console.log(searchField);

todoBtn.addEventListener("click", () => {
  let searchValue = searchField.value;

  let trimSearchValue = searchValue.trim();

  if (trimSearchValue.length === 0) {
    return alert("bhaaai field bharo pehle");
  }

  if (trimSearchValue.length > 0) {
    document.querySelector(".showTodo").innerHTML = "";
    todoArr.push(trimSearchValue);
    console.log(todoArr);
  }

  todoArr.forEach((elem, index) => {
    let ol = document.createElement("ol");

    ol.setAttribute("id", index);
    ol.classList.add("olTodoList");

    ol.innerHTML = ` <li> ${elem} </li > <button onclick='editHandler(this)' >Edit</button> <button onclick='deleteHandler(this)' >Delete</button>`;

    // console.log(ol);

    document.querySelector(".showTodo").appendChild(ol);
  });
  return
});

function deleteHandler(deleteTodo) {
  console.log(deleteTodo);
  console.log(deleteTodo.id);

  todoArr.splice(deleteTodo.parentElement.id, 1);
  document.querySelector(".showTodo").innerHTML = "";

  todoArr.forEach((elem, index) => {
    let ol = document.createElement("ol");

    ol.setAttribute("id", index);
    ol.classList.add("olTodoList");

    ol.innerHTML = ` <li> ${
      index + 1
    }  . ${elem} </li > <button>Edit</button> <button onclick='deleteHandler(this)' >Delete</button>`;

    // console.log(ol);

    document.querySelector(".showTodo").appendChild(ol);
  });
  return
}

// ======== eidt handler ========
let editIndex = null;
function editHandler(specificTodo) {
  console.log(specificTodo.parentElement.id);
  console.log(specificTodo.parentElement.children[0].innerHTML);

  searchField.value = specificTodo.parentElement.children[0].innerHTML;

  editIndex = specificTodo.parentElement.id;
  document.querySelector(".todoBtn").innerHTML = "Update";

  document.querySelector(".todoBtn").addEventListener("click", () => {
    if (editIndex !== null) {
      todoArr.splice(specificTodo.parentElement.id, 1, searchField.value);
    } else {
    //   todoArr.push(searchField.value);
      console.log('field me issue arha ha koi');
      
    }

    searchField.value = "";
    document.querySelector(".showTodo").innerHTML = "";

    todoArr.forEach((elem, index) => {
      let ol = document.createElement("ol");

      ol.setAttribute("id", index);
      ol.classList.add("olTodoList");

      ol.innerHTML = ` <li> ${elem} </li > <button onclick='editHandler(this)' >Edit</button> <button onclick='deleteHandler(this)' >Delete</button>`;

      // console.log(ol);

      document.querySelector(".showTodo").appendChild(ol);
    });
  });
}
