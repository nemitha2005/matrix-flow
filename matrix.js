const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters used for the matrix
const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const charactersArray = matrixCharacters.split("");

// Set font size
const fontSize = 16;
const columns = canvas.width / fontSize; // Number of columns for the rain
const drops = [];

//Initialize each drop at a random y-coordinate
for (let x = 0; x < columns; x++) {
  drops[x] = Math.random() * canvas.height;
}

// Draw the characters
function drawMatrix() {
  // Set the canvas background to translucent black
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the text color to green and choose the font
  ctx.fillStyle = "#0F0";
  ctx.font = `${fontSize}px monospace`;

  // Loop over each drop
  for (let i = 0; i < drops.length; i++) {
    const text =
      charactersArray[Math.floor(Math.random() * charactersArray.length)];

    // Draw the character at the current x and y position
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Move the drop down the screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Animate the matrix effect
setInterval(drawMatrix, 30);

// Adjust canvas size when window is resized
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
