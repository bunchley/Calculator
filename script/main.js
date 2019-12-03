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
let decimalExists = false;

displayNumber();
function displayNumber() {
  numbers.forEach(number => {
    number.addEventListener("click", () => {
      // console.log(number.textContent);
      updateDisplayNumber(number.textContent);
    });
  });
  window.addEventListener("keydown", e => {
    // console.log(e.key);
    updateDisplayNumber(`${e.key}`);
  });
}

function updateDisplayNumber(number) {
  if (isNaN(number)) return;
  if (currentOperator != "" || total != "") {
    displayBox.textContent = "";
  }
  displayBox.textContent = displayBox.textContent + number;
}

check4Decimal();
function check4Decimal() {
  decimalButton.addEventListener("click", () => {
    if (decimalExists) {
      return "";
    } else {
      for (i = 0; i < displayBox.textContent.length; i++) {
        if (displayBox.textContent[i] === ".") {
          decimalExists = true;
          // console.log("there is a decimal");
          return;
        } else {
          displayBox.textContent = displayBox.textContent + ".";
        }
      }
    }
  });
}

clearDisplay();
function clearDisplay() {
  clearButton.addEventListener("click", () => {
    displayBox.textContent = "";
    firstNumber = "";
    secondNumber = "";
    total = "";
    currentOperator = "";
  });
}
clearLastEntry();
function clearLastEntry() {
  clearEntryButton.addEventListener("click", () => {
    // console.log("clicked");
    displayBox.textContent = displayBox.textContent.slice(0, -1);
  });
}

selectOperator();
function selectOperator() {
  operators.forEach(operator => {
    operator.addEventListener("click", () => {
      if (currentOperator != "") {
        secondNumber = displayBox.textContent;
        // console.log("made it before compute total");
        computeTotal(firstNumber);
        currentOperator = operator.textContent;
      } else {
        firstNumber = displayBox.textContent;
        currentOperator = operator.textContent;
        // console.log(firstNumber, ", firstNum");
      }
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
  //   secondNumber,
  //   ", secondNumber",
  //   currentOperator,
  //   ", current operator",
  //   firstNumber,
  //   ", first number"
  // );

  total = operate(currentOperator, firstNumber, secondNumber);

  // console.log(total, ", total");
  firstNumber = total;
  // console.log(firstNumber, ", firstNum");
  currentOperator = "";
  displayBox.textContent = total;
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
  if (num2 === "0") {
    return "NaN";
  }
  return num1 / num2;
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
