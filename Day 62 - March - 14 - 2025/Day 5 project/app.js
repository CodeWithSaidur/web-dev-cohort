function add() {
  let input_1 = document.getElementById("input_1").value;
  let input_2 = document.getElementById("input_2").value;
  let result = document.getElementById("result");
  let n1 = parseInt(input_1);
  let n2 = parseInt(input_2);
  result.innerText = n1 + n2;
}
function sub() {
  let input_1 = document.getElementById("input_1").value;
  let input_2 = document.getElementById("input_2").value;
  let result = document.getElementById("result");

  let n1 = parseInt(input_1);
  let n2 = parseInt(input_2);
  result.innerText = n1 - n2;
}
function mul() {
  let input_1 = document.getElementById("input_1").value;
  let input_2 = document.getElementById("input_2").value;
  let result = document.getElementById("result");

  let n1 = parseInt(input_1);
  let n2 = parseInt(input_2);
  result.innerText = n1 * n2;
}
function div() {
  let input_1 = document.getElementById("input_1").value;
  let input_2 = document.getElementById("input_2").value;
  let result = document.getElementById("result");

  let n1 = parseInt(input_1);
  let n2 = parseInt(input_2);
  result.innerText = n1 / n2;
}
function mod() {
  let input_1 = document.getElementById("input_1").value;
  let input_2 = document.getElementById("input_2").value;
  let result = document.getElementById("result");

  let n1 = parseInt(input_1);
  let n2 = parseInt(input_2);
  result.innerText = n1 % n2;
}
