let Add_Button = document.getElementById("Add_Button");
let ToDo_Tasks = document.getElementById("ToDo_Tasks");
let Boards = document.querySelectorAll(".board");
let Items = document.querySelectorAll(".items");

Add_Button.addEventListener("click", () => {
  let Text = prompt("Enter Task");
  if (!Text) {
    alert("Enter Task");
  } else {
    let P = document.createElement("p");
    P.classList.add("item"); // add class
    P.innerText = Text;
    P.setAttribute("draggable", true); // add Attribute
    ToDo_Tasks.appendChild(P);
  }
});

Items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    item.classList.add("flying");
  });
  item.addEventListener("dragend", () => {
    item.classList.remove("flying");
  });
});

// console.log(Boards);
Boards.forEach((Board) => {
  Board.addEventListener("dragover", () => {
    let Flying = document.querySelector(".flying");

    Board.append(Flying);
  });
});
