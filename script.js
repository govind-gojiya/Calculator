function oneEdit() {
    document.calc.display.value += 1;
}

function twoEdit() {
    document.calc.display.value += 2;
}

function threeEdit() {
    document.calc.display.value += 3;
}

function fourEdit() {
    document.calc.display.value += 4;
}

function fiveEdit() {
    document.calc.display.value += 5;
}

function sixEdit() {
    document.calc.display.value += 6;
}

function sevenEdit() {
    document.calc.display.value += 7;
}

function eightEdit() {
    document.calc.display.value += 8;
}

function nineEdit() {
    document.calc.display.value += 9;
}

function zeroEdit() {
    document.calc.display.value += 0;
}

function dotEdit() {
    document.calc.display.value += ".";
}

function twoZero() {
    document.calc.display.value += "00";
}

function sqrtfun() {
    document.calc.display.value = Math.sqrt(document.calc.display.value);
}

function sqarefun() {
    document.calc.display.value = Math.pow(document.calc.display.value, 2);
}

function add() {
    document.calc.display.value += "+";
}

function sub() {
    document.calc.display.value += "-";
}

function multiply() {
    document.calc.display.value += "*";
}

function divison() {
    document.calc.display.value += "/";
}

function clean() {
    document.calc.display.value = "";
}

function answer() {

    var ansDisplay = eval(document.calc.display.value);
    if (ansDisplay == null)
        alert("Error");
    else
        document.calc.display.value = ansDisplay;
}