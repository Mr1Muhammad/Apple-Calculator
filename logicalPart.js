let display = document.querySelector('.display_calculator');
let currentInput = '';

function appendNumber(number){
  currentInput += number;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (/[+\-*/.]$/.test(currentInput)) return;
  currentInput += operator;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  } catch {
    display.textContent = 'Error';
  }
}
