function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operator";
  }
}
console.log(calculator(8, 2, "+"));
console.log(calculator(8, 2, "-")); 
console.log(calculator(8, 2, "*")); 
console.log(calculator(8, 2, "/")); 
console.log(calculator(8, 0, "/")); 
console.log(calculator(8, 2, "%"));

