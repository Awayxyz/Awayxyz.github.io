const outputText = document.getElementById("output");
const values = document.getElementsByClassName("values");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const div = document.getElementById("div");

const dot = document.getElementById("dot");
const reset = document.getElementById("reset");
const equals = document.getElementById("equals");

function outputLengthCheck() {
    return outputText.innerText.length < 20;
}

function addNumberToOutput(button) {
    if(outputLengthCheck()) outputText.innerText += button.value;
}

function oneDotInExpression(string) {
    let i = string.length;
    let numberOfDots = 0;
    while(i--) {
        if(containsOperations(string[i])) {
            return numberOfDots;
        }
        if(string[i] === ".") numberOfDots++;
    }
    return numberOfDots;
}

function containsOperations(string) {
    if(string.includes("+") ||
        string.includes("-") ||
        string.includes("×") ||
        string.includes("÷")) {
        return true;
    } else {
        return false;
    }
}

function containsDot(string) {
    let dots = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === ".") dots++;
    }
    return dots;
}

document.querySelectorAll('.values').forEach(item => {
    item.addEventListener('click', event => {
        addNumberToOutput(item);
    })
})

dot.onclick = function() {
    let text = outputText.innerText;
    if (Number.isInteger(parseInt(text[text.length-1])) && ((!containsOperations(text) && containsDot(text) === 0) || (containsOperations(text) && oneDotInExpression(text)) === 0)) {
        outputText.innerText += ".";
    }
}

reset.onclick = function() {
    outputText.innerText = "";
}

plus.onclick = function() {
    let text = outputText.innerText;
    if(Number.isInteger(parseInt(text[text.length-1])) && !containsOperations(text))  {
        outputText.innerText += "+";
    }
}

minus.onclick = function() {
    let text = outputText.innerText;
    if(Number.isInteger(parseInt(text[text.length-1])) && !containsOperations(text))  {
        outputText.innerText += "-";
    }
}

times.onclick = function() {
    let text = outputText.innerText;
    if(Number.isInteger(parseInt(text[text.length-1])) && !containsOperations(text))  {
        outputText.innerText += "×";
    }
}

div.onclick = function() {
    let text = outputText.innerText;
    if(Number.isInteger(parseInt(text[text.length-1])) && !containsOperations(text))  {
        outputText.innerText += "÷";
    }
}

equals.onclick = function() {
    let expression = outputText.innerText;
    if(expression.length >= 1 && !containsOperations(expression[expression.length-1]) && expression[expression.length-1] !== ".") {
        console.log("podminka splnena");
        if(containsOperations(expression)) {
            console.log("contains exps")
            if(expression.includes("+")) {
                const eval = expression.split("+");
                let add = parseInt(eval[0]) + parseInt(eval[1]);
                outputText.innerText = add.toString();
            }
            else if(expression.includes("-")) {
                const eval = expression.split("-");
                let add = parseInt(eval[0]) - parseInt(eval[1]);
                outputText.innerText = add.toString();
            }
            else if(expression.includes("×")) {
                const eval = expression.split("×");
                let add = parseInt(eval[0]) * parseInt(eval[1]);
                outputText.innerText = add.toString();
            }
            else if(expression.includes("÷")) {
                const eval = expression.split("÷");
                let add = parseInt(eval[0]) / parseInt(eval[1]);
                outputText.innerText = add.toString();
            }
        }
    }
}
