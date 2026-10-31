// Counter state starts at zero.
let count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const resetButton = document.getElementById("resetBtn");

// Update the number shown on the page.
function updateDisplay() {
  counterDisplay.textContent = count;
  counterDisplay.classList.remove("bump");
  // Restart the small animation each time the display changes.
  void counterDisplay.offsetWidth;
  counterDisplay.classList.add("bump");
}

// Increase the counter when the Increment button is clicked.
incrementButton.addEventListener("click", function () {
  count += 1;
  updateDisplay();
});

// Reset the counter to zero.
resetButton.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
