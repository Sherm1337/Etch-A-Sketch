const createGrid = document.querySelector("#createGrid");
const resetGrid = document.querySelector("#resetGrid");
const gridContainer = document.querySelector(".gridContainer");
const square = document.querySelector(".square");
const divs = document.querySelector("div");

createGrid.addEventListener("click", function gridSize() {

    let gridNum = prompt("Enter an amount:");

    if (gridNum > 100) {
        alert("Please enter a number under 100.");
    } else {
        let gridSize = gridNum * gridNum;

        for (var i = 0; i < gridSize; i++) {
            const newSquare = document.createElement("div");
            newSquare.className = "square";
            gridContainer.appendChild(newSquare);

            newSquare.style.width = (960 / gridNum) + "px";
            newSquare.style.height = (960 / gridNum) + "px";
        }
    }
});

resetGrid.addEventListener("click", function reset () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
});