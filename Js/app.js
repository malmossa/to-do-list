const emptList = document.querySelector(".empty");
const list = document.querySelector("ul");
const addTodo = document.querySelector(".add");
const searchInput = document.querySelector(".search");

// Adding new to do item
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addTodo.add.value) {
    emptList.style.display = "none";
    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${addTodo.add.value}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
  } else {
    alert("Please add to do item first");
  }
  // Clear the input after adding
  addTodo.reset();
});

// Delete to do item and mark as completed with event delegation
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure!")) {
      e.target.parentElement.remove();
    }
  }

  e.target.classList.toggle("completed");

  if (list.innerHTML === "") {
    emptList.style.display = "block";
  }
});

// Filter the to do list by key word
searchInput.addEventListener("keyup", () => {
  const text = searchInput.search.value.toLowerCase();
  const listItem = document.querySelectorAll(".list-group-item");

  listItem.forEach((todo) => {
    const todoItem = todo.textContent.trim();

    if (todoItem.includes(text)) {
      todo.classList.remove("filtered");
    } else {
      todo.classList.add("filtered");
    }
  });
});
