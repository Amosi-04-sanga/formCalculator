// function to append number.
function appendNumber(x) {
    formCalculator.operation.value += x.value;
}

// function to calculate inputs.
function Calculate() {
    let ans = eval(formCalculator.operation.value);
    formCalculator.screen.value = '=' + ' ' + ans;
}

// function to clear inputs on screen.
function clearScreen() {
    formCalculator.screen.value = '';
    formCalculator.operation.value = '';
}

// function to delete one number.
function deleteChar() {
    formCalculator.operation.value = parseInt(formCalculator.operation.value /= 10);
}

