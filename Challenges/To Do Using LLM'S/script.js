document.addEventListener("DOMContentLoaded", () => {
  // Get references to input field, add button, and task list
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Load existing tasks from localStorage when the page loads
  loadTasks();

  // Add task when the "Add" button is clicked
  addTaskButton.addEventListener("click", addTask);

  // Allow adding task by pressing "Enter" key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get task input value and remove whitespace

    if (taskText) { // Only add non-empty tasks
      // Create a new task item
      const li = document.createElement("li");
      li.className = "task-item";
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;

      // Append the new task to the task list
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = "";

      // Get the edit and delete buttons
      const editButton = li.querySelector(".edit");
      const deleteButton = li.querySelector(".delete");

      // Attach event listeners for editing and deleting tasks
      editButton.addEventListener("click", () => editTask(li));
      deleteButton.addEventListener("click", () => deleteTask(li));

      // Save updated tasks to localStorage
      saveTasks();
    }
  }

  // Function to edit an existing task
  function editTask(taskItem) {
    // Get the task text and create an input field for editing
    const span = taskItem.querySelector("span");
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;

    // Replace the task text with the input field
    taskItem.replaceChild(input, span);

    // Create a save button to replace the edit button
    const editButton = taskItem.querySelector(".edit");
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "save";
    taskItem.replaceChild(saveButton, editButton);

    // Focus on the input field
    input.focus();

    // Save the edited task when input loses focus or save button is clicked
    input.addEventListener("blur", saveTask);
    saveButton.addEventListener("click", saveTask);

    // Function to save the edited task
    function saveTask() {
      const newText = input.value.trim();

      if (newText) {
        // Update the task with the new text
        const newSpan = document.createElement("span");
        newSpan.textContent = newText;
        taskItem.replaceChild(newSpan, input);
        taskItem.replaceChild(editButton, saveButton);
      } else {
        // Delete task if input is empty
        deleteTask(taskItem);
      }

      // Save updated tasks to localStorage
      saveTasks();
    }
  }

  // Function to delete a task
  function deleteTask(taskItem) {
    taskList.removeChild(taskItem); // Remove task from DOM
    saveTasks(); // Update localStorage
  }

  // Function to save tasks to localStorage
  function saveTasks() {
    const tasks = Array.from(taskList.children).map(
      (li) => li.querySelector("span").textContent
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to load tasks from localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Populate task list with stored tasks
    tasks.forEach((taskText) => {
      const li = document.createElement("li");
      li.className = "task-item";
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;

      // Append task to the task list
      taskList.appendChild(li);

      // Attach edit and delete functionality
      const editButton = li.querySelector(".edit");
      const deleteButton = li.querySelector(".delete");
      editButton.addEventListener("click", () => editTask(li));
      deleteButton.addEventListener("click", () => deleteTask(li));
    });
  }
});
