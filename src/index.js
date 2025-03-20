document.getElementById("create-task-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const taskText = document.getElementById("new-task-description").value;
  if (!taskText.trim()) return;

  addTask(taskText);
  event.target.reset();
});


function addTask(taskText) {
  const task = document.createElement("li");
  task.textContent = taskText + " ";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => deleteTask(task));

  task.appendChild(deleteButton);
  document.getElementById("tasks").appendChild(task);
}

function deleteTask(task) {
  task.remove();
}