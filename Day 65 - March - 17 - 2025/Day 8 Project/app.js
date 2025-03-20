let textInput = document.getElementById("textInput");
let chatCounter = document.getElementById("chatCounter");
let warningMassage = document.getElementById("warningMassage");

textInput.addEventListener("input", () => {
  let chatCount = textInput.value.length;
  chatCounter.innerText = chatCount;
  if (chatCounter >= 200) {
    warningMassage.innerText = "Stop";
  }
});
