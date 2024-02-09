// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Initialize variables
let currentInput = "";
let firstOperand = null;
let operator = null;

// Function to update the display
function updateDisplay() {
    display.innerText = currentInput;
}

// Add event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;

        // Handle number and operator buttons
        if (!isNaN(buttonText) || buttonText === ".") {
            currentInput += buttonText;
            updateDisplay();
        } else if (buttonText === "C") {
            // Clear the display and reset variables
            currentInput = "";
            firstOperand = null;
            operator = null;
            updateDisplay();
        } else if (["+", "-", "*", "/"].includes(buttonText)) {
            if (currentInput !== "") {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                    operator = buttonText;
                    currentInput = "";
                } else {
                    const secondOperand = parseFloat(currentInput);
                    switch (operator) {
                        case "+":
                            firstOperand += secondOperand;
                            break;
                        case "-":
                            firstOperand -= secondOperand;
                            break;
                        case "*":
                            firstOperand *= secondOperand;
                            break;
                        case "/":
                            firstOperand /= secondOperand;
                            break;
                    }
                    operator = buttonText;
                    currentInput = "";
                }
                updateDisplay();
            }
        } else if (buttonText === "=") {
            if (operator !== null) {
                const secondOperand = parseFloat(currentInput);
                switch (operator) {
                    case "+":
                        firstOperand += secondOperand;
                        break;
                    case "-":
                        firstOperand -= secondOperand;
                        break;
                    case "*":
                        firstOperand *= secondOperand;
                        break;
                    case "/":
                        firstOperand /= secondOperand;
                        break;
                }
                currentInput = firstOperand.toString();
                operator = null;
                updateDisplay();
            }
        }
    });
});
