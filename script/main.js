let numbers = document.querySelectorAll(".number");
let displayBox = document.querySelector(".display");
let clearButton = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");
let negativeButton = document.querySelector(".negative");
let clearEntryButton = document.querySelector(".backspace");
let decimalButton = document.querySelector(".period");
let currentOperator = "";
let secondNumber = "";
let firstNumber = "";
let total = "";
let totalDisplayed = false;

displayNumber();
function displayNumber() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      updateDisplayNumber(number.textContent);
    });
  });
  window.addEventListener("keydown", (e) => {
    updateDisplayNumber(`${e.key}`);
    if (e.key === "Enter") {
      computeTotal();
    }
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
      saveNumber(e.key);
      clearBetweenEntries();
    }
    if (e.key === "Backspace") {
      clearDisplay();
    }
  });
}

function updateDisplayNumber(number) {
  if (totalDisplayed === true) {
    firstNumber = total;
    clearBetweenEntries();
    totalDisplayed = false;
  }
  if (number === ".") {
    displayBox.textContent += ".";
  } else if (number === "Shift") {
    displayBox.textContent = displayBox.textContent;
  } else {
    if (isNaN(number)) return;
    displayBox.textContent = displayBox.textContent + number;
  }
}

function clearBetweenEntries() {
  displayBox.textContent = "";
}
function clearDisplay() {
  displayBox.textContent = "";
  firstNumber = "";
  secondNumber = "";
  total = "";
  currentOperator = "";
}
selectClearDisplay();
function selectClearDisplay() {
  clearButton.addEventListener("click", () => {
    clearDisplay();
  });
}
clearLastEntry();
function clearLastEntry() {
  clearEntryButton.addEventListener("click", () => {
    displayBox.textContent = displayBox.textContent.slice(0, -1);
  });
}

function saveNumber(operator) {
  if (currentOperator != "") {
    secondNumber = displayBox.textContent;
    computeTotal(firstNumber);
    currentOperator = operator;
    clearBetweenEntries();
  } else {
    firstNumber = displayBox.textContent;
    currentOperator = operator;
    clearBetweenEntries();
  }
}
selectOperator();
function selectOperator() {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      saveNumber(operator.textContent);
    });
  });
}

selectEqual();
function selectEqual() {
  equalButton.addEventListener("click", () => {
    computeTotal();
  });
}
function computeTotal() {
  secondNumber = displayBox.textContent;
  // console.log(
  //   "First number",
  //   firstNumber,
  //   "\n",
  //   "Current operator",
  //   currentOperator,
  //   "\n",
  //   "SecondNumber",
  //   secondNumber,
  //   "\n"
  // );

  total = operate(currentOperator, firstNumber, secondNumber);

  // console.log("Total=", total);
  firstNumber = total;
  currentOperator = "";
  displayBox.textContent = total;
  totalDisplayed = true;
}

toggleNegative();
function toggleNegative() {
  negativeButton.addEventListener("click", () => {
    displayBox.textContent = -displayBox.textContent;
  });
}

// OPERATOR FUNCTIONS - START
function addition(num1, num2) {
  return (parseFloat(num1) + parseFloat(num2)).toFixed(2);
}

function subtraction(num1, num2) {
  return (parseFloat(num1) - parseFloat(num2)).toFixed(2);
}

function multiplication(num1, num2) {
  return (num1 * num2).toFixed(2);
}

function division(num1, num2) {
  if (num2 === "0") {
    return "NaN";
  }
  return (parseFloat(num1) / parseFloat(num2)).toFixed(2);
}

function operate(action, num1, num2) {
  if (
    action === "" ||
    num1 === "" ||
    num2 === "" ||
    num1 === "NaN" ||
    num2 === "NaN"
  ) {
    return "NaN";
  }
  if (action === "+") {
    return addition(num1, num2);
  }
  if (action === "-") {
    return subtraction(num1, num2);
  }
  if (action === "x" || action === "*") {
    return multiplication(num1, num2);
  }
  if (action === "/") {
    return division(num1, num2);
  }
  if (action === "%") {
    return parseInt(num1) % parseInt(num2);
  }
}
// OPERATOR FUNCTIONS - END
