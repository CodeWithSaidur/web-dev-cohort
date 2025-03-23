let InputText = document.getElementById("InputText");
let CheckButton = document.getElementById("CheckButton");
let resultMassage = document.getElementById("resultMassage");

CheckButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  let text = InputText.value.toLowerCase().replace(/[^a-x0-9]/g, "");
  let reverseText = text.split("").reverse().join("");
  if (text === reverseText) {
    resultMassage.innerText = "PALINDROME";
  } else {
    resultMassage.innerText = "Not PALINDROME";
  }
}
