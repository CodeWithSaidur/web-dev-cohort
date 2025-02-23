const InputBox = document.getElementById("InputBox");
const AddButton = document.getElementById("AddButton");
const ToDoList = document.getElementById("ToDoList");

AddButton.addEventListener("click", () => {
  //   console.log(InputBox.value);

  if (InputBox.value.trim().length <= 0) {
    alert("Enter To Do");
  } else {
    const li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ToDoList.appendChild(li);
    InputBox.value = "";

    // Creating Delete Button
    const del = document.createElement("button");
    del.innerHTML = "del";
    del.className = "del";
    ToDoList.appendChild(del);

    // Creating Edit Button
    const edit = document.createElement("button");
    edit.innerHTML = "edit";
    edit.className = "edit";
    ToDoList.appendChild(edit);
  }
});
