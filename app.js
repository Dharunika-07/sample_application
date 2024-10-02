// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and the input field
    const submitButton = document.getElementById("submitButton");
    const userInput = document.getElementById("userInput");
    const result = document.getElementById("result");

    // Add an event listener to the button
    submitButton.addEventListener("click", function () {
        // Get the value from the input field
        const input = userInput.value;

        // Check if the input is a number
        if (!isNaN(input) && input.trim() !== "") {
            // Perform some operation (e.g., multiply the number by 2)
            const output = input * 2;

            // Display the result
            result.textContent = `The number multiplied by 2 is: ${output}`;
        } else {
            // If the input is invalid, display an error message
            result.textContent = "Please enter a valid number.";
            result.style.color = "red"; // Change text color to red for the error
        }
    });
});
