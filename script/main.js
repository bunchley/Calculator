let numbers = document.querySelectorAll(".number");
let displayBox = document.querySelector(".display");
let clearButton = document.querySelector(".clear");
let operators = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");
let negativeButton = document.querySelector(".negative");
let currentOperator = "";
let secondNumber = "";
let firstNumber = "";
let total = "";

displayNumber();
function displayNumber() {
  numbers.forEach(number => {
    number.addEventListener("click", () => {
      if (currentOperator != "" && secondNumber == "") {
        displayBox.textContent = "";
      }
      displayBox.textContent = displayBox.textContent + number.textContent;
      secondNumber = displayBox.textContent;
    });
  });
}
clearDisplay();
function clearDisplay() {
  clearButton.addEventListener("click", () => {
    displayBox.textContent = "";
    firstNumber = "";
    secondNumber = "";
    total = "";
  });
}
selectOperator();
function selectOperator() {
  operators.forEach(operator => {
    operator.addEventListener("click", () => {
      currentOperator = operator.textContent;
      console.log(currentOperator);
      firstNumber = displayBox.textContent;
      console.log(firstNumber, ", firstNum");
      secondNumber = "";
    });
  });
}

computeTotal();
function computeTotal() {
  equalButton.addEventListener("click", () => {
    secondNumber = displayBox.textContent;
    console.log(displayBox.textContent, ", secondNumber");
    total = operate(currentOperator, firstNumber, secondNumber);

    console.log(total, ", total");
    firstNumber = total;
    console.log(firstNumber, ", firstNum");
    currentOperator = "";
    displayBox.textContent = total;
  });
}

toggleNegative();
function toggleNegative() {
  negativeButton.addEventListener("click", () => {
    displayBox.textContent = -displayBox.textContent;
  });
}

// OPERATOR FUNCTIONS - START
function addition(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function operate(action, num1, num2) {
  if (action === "+") {
    return addition(num1, num2);
  }
  if (action === "-") {
    return subtraction(num1, num2);
  }
  if (action === "x") {
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
