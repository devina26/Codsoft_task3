let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
  
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(val) {
    if (displayValue === '0') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay()
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    document.getElementById('display1').textContent =displayValue
    
}

updateDisplay();
