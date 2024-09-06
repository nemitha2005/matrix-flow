// Get the canvas element and its 2D drawing context
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters used for the matrix effect
const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const charactersArray = matrixCharacters.split(""); // Convert the string into an array of characters

// Set the font size for the matrix effect
const fontSize = 16;

// Calculate the number of columns based on canvas width and font size
const columns = canvas.width / fontSize;

// Array to store the vertical position of each drop
const drops = [];

// Initialize each drop at a random y-coordinate within the canvas height
for (let x = 0; x < columns; x++) {
  drops[x] = Math.random() * canvas.height;
}

// Function to draw the matrix effect
function drawMatrix() {
  // Set the canvas background to translucent black for a trailing effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the text color to green and choose the font
  ctx.fillStyle = "#0F0";
  ctx.font = `${fontSize}px monospace`;

  // Loop through each drop
  for (let i = 0; i < drops.length; i++) {
    // Randomly select a character from the array
    const text =
      charactersArray[Math.floor(Math.random() * charactersArray.length)];

    // Draw the character at the current x and y position
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset the drop if it has fallen past the bottom of the canvas
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Move the drop down the screen
    drops[i]++;
  }
}

// Set an interval to call the drawMatrix function every 30 milliseconds
setInterval(drawMatrix, 30);

// Adjust canvas size when the window is resized
window.addEventListener("resize", () => {
  // Update canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Recalculate the number of columns and reset the drops array
  const columns = canvas.width / fontSize;
  drops.length = 0; // Clear the existing drops
  for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
  }
});
