function add() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = Number(num1) + Number(num2);
  document.getElementById("result").innerHTML = "結果：" + result;
}

function subtract() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = Number(num1) - Number(num2);
  document.getElementById("result").innerHTML = "結果：" + result;
}

function multiply() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = Number(num1) * Number(num2);
  document.getElementById("result").innerHTML = "結果：" + result;
}

function divide() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = Number(num1) / Number(num2);
  document.getElementById("result").innerHTML = "結果：" + result;
}
