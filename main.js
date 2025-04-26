let display = document.querySelector("#display");

function addTodisplay(input){
    display.value += input;
}

function calculate(){
    display.value = eval(display.value)
}
function clearDisplay(){
    display.value = ""
}