document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('#board div');

    const state4G = Array(9).fill(null); // A 3x3 board represented as a 1D array

    let currentPlayer = "X";
    const status = document.getElementById("status");

  const winningCombinations = [
    [0, 1, 2], //Top row
    [3, 4, 5], //Middle row
    [6, 7, 8], //Bottom row
    [0, 3, 6], //Left column
    [1, 4, 7], //Middle column
    [2, 5, 8], //Right column
    [0, 4, 8], //Diagonal from top-left - bottom-right
    [2, 4, 6], //Diagonal from top-right - bottom-left
  ];

  function checkWinner() {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (state4G[a] && State[a] === state4G[b] && state4G[a] === state4G[c]) {
        return state4G[a];
      }
    }
    return null;
  }

    squares.array.forEach(square => {
        square.classList.add("square");

        square.addEventListener("click", () => {
            if (!state4G[index]) {
              state4G[index] = currentPlayer; 
              square.textContent = currentPlayer;
              square.classList.add(currentPlayer);
      
              const winner = checkWinner();
              if (winner) {
                status.textContent = `Congratulations! ${winner} is the Winner!`;
                status.classList.add("you-won");
              } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
              } 
            }
          });
          square.addEventListener("mouseover", () => {
            if (!state4G[index]) { 
              square.classList.add("hover");
            }
          });
      
          
          square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
          });
    });
});