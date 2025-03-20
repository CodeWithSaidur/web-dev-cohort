let ColorButton = document.getElementById("ColorButton");

ColorButton.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 126);
  let green = Math.floor(Math.random() * 126);
  let blue = Math.floor(Math.random() * 126);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
