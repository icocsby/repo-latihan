// let currentInput = "";
// let currentOperator = "";
// let result = null;
let displayValue = '';
let currentResult = "";
let darkMode = false;

function appendToResult(value) {
  currentResult += value;
  document.getElementById("result").value = currentResult;
}

function clearResult() {
  currentResult = "";
  document.getElementById("result").value = currentResult;
}

function operate(operation) {
  switch (operation) {
    case '+/-':
      currentResult = -eval(currentResult);
      break;
    case '%':
      currentResult = eval(currentResult) / 100;
      break;
  }
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentResult);
    document.getElementById("result").value = result;
    addToHistory(currentResult + " = " + result);
    currentResult = "";
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentResult = "";
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById("history-list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(entry));
  historyList.appendChild(li);
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  darkMode = !darkMode;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Escape") {
    clearResult();
  } else if (event.key === "Backspace") {
    currentResult = currentResult.slice(0, -1);
    document.getElementById("result").value = currentResult;
  } else {
    appendToResult(event.key);
  }
});