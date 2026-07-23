//get the display and preview input elements
const display = document.getElementById("display");

//adds the button value to the display
function press(value) {
    display.value += value;
    // show the answer while typing
    preview();
}
// Display the result without replacing the expression
function preview() {
    try {
        result.value = calculateExpression(display.value);
    } catch {
        // Clear the preview if the expression is incomplete or invalid
        result.value = "";
    }
}
// Calculates the final answer when the "=" buttion is oressed
function calculate() {
    try {
        // Replace the expression with the calculated result
        display.value = calculateExpression(display.value);
        result.value = display.value;
    } catch {
        // Display an error message if the calculation fails
        display.value += "";
        result.value = "";
    }
}
// Performs the arithmetic operation
function calculateExpression(expression) {
// store the operator enterd by the user
    let operator = "";
// Check which operator is in the expression 
    if (expression.includes("+")) operator = "+";
    else if (expression.includes("-")) operator = "-";
    else if (expression.includes("*")) operator = "*";
    else if (expression.includes("/")) operator = "/";
    else if (expression.includes("%")) operator = "%";
    else return expression; //reture the number if no operator exists
//Split the expression into two numbers
    let parts = expression.split(operator);
// Convert the expression values into numbers
    let num1 = parseFloat(parts[0]);
    let num2 = parseFloat(parts[1]);
// Perform the correct arithmatic operation
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            // Prevent division by zero
            return num2 !== 0 ? num1 / num2 : "";
        case "%":
            return num1 % num2;
    }
}
