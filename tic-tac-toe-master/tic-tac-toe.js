document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('#board div');

    const State = Array(9).fill(null); // A 3x3 board represented as a 1D array

    let currentPlayer = "X";

    squares.array.forEach(square => {
        square.classList.add("square");

        square.addEventListener("click", () => {
            // Only add "X" or "O" if the square is empty
            if (!gameState[index]) {
              State[index] = currentPlayer; // Update the game state
              square.textContent = currentPlayer; // Display "X" or "O" in the square
              square.classList.add(currentPlayer); // Add class for styling (either "X" or "O")
      
              // Toggle to the next player
              currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
          });
    });
});