// calculators keep a running total going
let runningTotal = 0;
// as a user types in numbers, need to keep track of what they type
let buffer = '0';
// have to keep track of what was previously pressed
let previousOperator;
const screen = document.querySelector('.screen');

// bind eventListener, return value of what was clicked
document.querySelector('.calc-buttons').addEventListener('click', function (event) {
    buttonClick(event.target.innerText);
});

// tracking a button click
function buttonClick(value) {
    // button click produces string, need to convert to number for calculation
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

// handle numbers, someone hits seven then five, five goes on end to 75
function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

// handle operators
function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
            break;
        case '=':
            if (previousOperator === null) {
                return; // do nothing
            }
            flushOperation(parseInt(buffer)); // commit to operation holding on to, turning buffer into number and passing into operation
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleMath(value) {
    if (buffer === "0") {
      // do nothing
      return;
    }
  
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperation(intBuffer);
    }
  
    previousOperator = value;
  
    buffer = "0";
  }

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '*') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

// anytime anything changes rerender
function rerender() {
    screen.innerHTML = buffer;
}