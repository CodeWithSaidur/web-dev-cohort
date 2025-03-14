const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const complimentBox = document.getElementById("complimentBox");
const banar = document.getElementById("banar");
colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  updataColor(selectedColor);
  //   complimentColor(selectedColor);
});

function updataColor(selectedColor) {
  colorCode.innerText = selectedColor;
  banar.style.color = selectedColor;
  banar.style.backgroundColor = "#ff0000";
}
function complimentColor(selectedColor) {
  const base = parseInt(selectedColor.slice(1), 16);
  const conpliment = ()
}
