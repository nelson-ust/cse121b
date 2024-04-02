/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isMember = document.getElementById("member").checked;
    let total;
    if (isMember) {
        total = subtotal * 0.8; // Apply 20% discount for members
    } else {
        total = subtotal;
    }
    document.getElementById("total").textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const sourceArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.getElementById("array").textContent = sourceArray.join(", ");

/* Output Odds Only Array */
const oddsArray = sourceArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddsArray.join(", ");

/* Output Evens Only Array */
const evensArray = sourceArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evensArray.join(", ");

/* Output Sum of Org. Array */
const sumOfArray = sourceArray.reduce((acc, cur) => acc + cur, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = sourceArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((acc, cur) => acc + cur, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

/* Additional Functions */
/* Function for Addition Feature */
function addNumbers() {
    const add1 = parseFloat(document.getElementById("add1").value);
    const add2 = parseFloat(document.getElementById("add2").value);
    const sum = add(add1, add2);
    document.getElementById("sum").value = sum;
}

/* Function for Subtraction Feature */
const subtractNumbers = function() {
    const subtract1 = parseFloat(document.getElementById("subtract1").value);
    const subtract2 = parseFloat(document.getElementById("subtract2").value);
    const difference = subtract(subtract1, subtract2);
    document.getElementById("difference").value = difference;
};

/* Function for Multiplication Feature */
const multiplyNumbers = () => {
    const factor1 = parseFloat(document.getElementById("factor1").value);
    const factor2 = parseFloat(document.getElementById("factor2").value);
    const product = multiply(factor1, factor2);
    document.getElementById("product").value = product;
};

/* Function for Division Feature */
function divideNumbers() {
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.getElementById("divisor").value);
    const quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
}


/* Event Listeners */
document.getElementById("addNumbers").addEventListener("click", addNumbers);
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
