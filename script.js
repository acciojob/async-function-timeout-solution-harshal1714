const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
async function showMessage() {
  // Get the message and delay from the input fields
  const message = textInput.value;
  const delay = delayInput.value * 1000; // Convert delay to milliseconds

  // Wait for the specified delay using await
  await new Promise(resolve => setTimeout(resolve, delay));

  // Display the message on the webpage
  outputDiv.textContent = message;
}

// Event listener for the button click
btn.addEventListener('click', showMessage);