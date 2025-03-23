let billAmountInput = document.getElementById("billAmount");
let tipPercentageInput = document.getElementById("tipPercentage");
let numPeopleInput = document.getElementById("numPeople");
let calculateButton = document.getElementById("calculateButton");
let totalTipDisplay = document.getElementById("totalTip");
let tipPerPersonDisplay = document.getElementById("tipPerPerson");

calculateButton.addEventListener("click", calculateTip);

function calculateTip() {
  const billAmount = parseInt(billAmountInput.value);
  const tipPercentage = parseInt(tipPercentageInput.value);
  const numPeople = parseInt(numPeopleInput.value);

  //   validation
  if (
    Number.isNaN(billAmount) ||
    Number.isNaN(tipPercentage) ||
    Number.isNaN(numPeople)
  ) {
    alert("ENTER A VALID NUMBER");
  }
  
}
