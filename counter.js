// Initialize the counter variable
let counter = 0;

// Get the counter element and buttons
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Function to update the counter display
function updateCounter() {
    counterElement.textContent = counter;
}

// Add event listener to increment button
incrementButton.addEventListener("click", function() {
    counter++;
    updateCounter();
});

// Add event listener to decrement button
decrementButton.addEventListener("click", function() {
    counter--;
    updateCounter();
});

// Add event listener to reset button
resetButton.addEventListener("click", function() {
    counter = 0;
    updateCounter();
});

// Initialize the counter display
updateCounter();