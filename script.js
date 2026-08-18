function addTask() {
  let task = document.getElementById("task").value;

  if (task == "") {
    alert("Please enter a task");
    return;
  }

  let item =
    "<li>" +
    task +
    " <button onclick='updateTask(this)'>Update</button>" +
    " <button onclick='deleteTask(this)'>Delete</button>"+
     " <button onclick='doneTask(this)'>Done</button>"+"</li>";

  document.getElementById("list").innerHTML += item;

  document.getElementById("task").value = "";
}

function updateTask(button) {
  let newTask = prompt("Enter new task");

  if (newTask == "") {
    alert("Please enter a task");
    return;
  }

  button.parentElement.firstChild.textContent = newTask;
}
function deleteTask(button) {
  button.parentElement.remove();
}
function doneTask(button) {
    button.parentElement.style.textDecoration = "line-through";
}

