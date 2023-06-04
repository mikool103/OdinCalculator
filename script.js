


const displayText = document.querySelector('.display-text');
const operandsButton = document.querySelectorAll('.operand');
const equalButton = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator');
const backspacebutton = document.querySelector('.backspace')

var currentValue = displayText.textContent;
var currentIntValue;
var oldValue = "";
var oldIntValue;
var displayMode = "operation";

backspacebutton.addEventListener('click',deleteLast);




function updateDisplay(result){
    displayText.textContent = result;
    currentValue = displayText.textContent;
}

function getResult(){
    displayMode = "result";
    currentIntValue = getNumber(currentValue);
    if (oldValue.includes('+')){
        result = oldIntValue + currentIntValue;
        console.log(result);
        updateDisplay(result);
    } else if (oldValue.includes('-')) {
       result = oldIntValue - currentIntValue;
       updateDisplay(result);
    } else if (oldValue.includes('*')) {
        result = oldIntValue * currentIntValue;
        updateDisplay(result);
     } else if (oldValue.includes('/')) {
        if (currentValue === "0") {
            displayText.textContent = 'DUMMY!!!'
            currentValue = oldValue;
        } else {
            result = oldIntValue / currentIntValue;
            updateDisplay(result);
        }
        
     }
    
}

equalButton.addEventListener('click',getResult);

operators.forEach((operator) => operator.addEventListener('click', function(e){
    if (currentValue === "") {
        return alert('Enter a number first');
    }
    if (oldValue === "" || displayMode === 'result'){
        oldIntValue = getNumber(currentValue);
        console.log(oldIntValue);
        oldValue = currentValue + e.target.textContent;
        clearDisplay();
        console.log(oldValue);
    } else {
        getResult()
        displayMode = "result";
        oldIntValue = getNumber(currentValue);
        console.log(oldIntValue);
        oldValue = currentValue + e.target.textContent;

    }
   
}));

operandsButton.forEach((button) => button.addEventListener('click', function(e){
    if (displayMode === 'result') {
        displayMode = "operation";
        clearDisplay();
        currentText = displayText.textContent;
        currentValue = currentText + this.textContent;
        displayText.textContent = currentValue;
    } else if (displayText.textContent.length === 8){
       console.log('hi');
    } else if (e.target.textContent == "." && currentValue.includes('.')){
        alert('already has a decimal point')
    } else {
        currentText = displayText.textContent;
        currentValue = currentText + this.textContent;
        displayText.textContent = currentValue;
    }
}));




const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', hardClearDisplay);


function clearDisplay(){
    displayText.textContent = "";
    currentValue = displayText.textContent;
}

function hardClearDisplay() {
    displayText.textContent = "";
    currentValue = displayText.textContent;
    oldValue = "";
    displayMode = "operation";
}

function getNumber(number) {
    if (number.includes('.')) {
        return parseFloat(number).toFixed(3);
    } else {
        return parseInt(number);
    }
}

function deleteLast() {
  let newValue = currentValue.substring(0, currentValue.length-1);
  updateDisplay(newValue);
}




