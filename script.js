// script.js

let currentInput = '';
let currentOperation = null;
let previousInput = '';

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperation(operation) {
    if (currentInput === '' && previousInput === '') return;

    if (currentOperation !== null) {
        calculateResult();
    }

    previousInput = currentInput;
    currentInput = '';
    currentOperation = operation;
}

function calculateResult() {
    if (previousInput === '' || currentInput === '' || currentOperation === null) return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}
