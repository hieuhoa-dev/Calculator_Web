const display = document.querySelector('.display');
const result = document.querySelector('.result');

function handleClear() {
    display.value = '';
    result.value = '';
}
function handleBack() {
    if(display.value && display.value  !=='' )
        display.value = display.value.slice(0,display.value.length -1)
}

function handleCalculator() {
    try {
        result.value = eval(display.value);
    } 
    catch (error) {
        result.value = "Error";
    }
}
