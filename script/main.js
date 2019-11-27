let action = "";

function addition(num1, num2) {
  return num1 + num2;
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
  if (action === "add") {
    return addition(num1, num2);
  }
  if (action === "subtract") {
    return subtraction(num1, num2);
  }
  if (action === "multiply") {
    return multiplication(num1, num2);
  }
  if (action === "divide") {
    return division(num1, num2);
  }
}
