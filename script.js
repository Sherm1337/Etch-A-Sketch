const changeGrid = document.querySelector("#changeGrid");
const resetGrid = document.querySelector("#resetGrid");
const gridContainer = document.querySelector(".gridContainer");
const squares = document.querySelector(".square");

changeGrid.addEventListener("click", function gridSize() {

    let gridNum = prompt("Enter an amount:");
    
    let gridSize = gridNum * gridNum;

    for (var i = 0; i < gridSize; i++) {
        const newSquare = document.createElement("div");
        newSquare.className = "square";
        gridContainer.appendChild(newSquare);

        newSquare.style.width = (960 / gridNum) + "px";
        newSquare.style.height = (960 / gridNum) + "px";
    }

   
    
});

resetGrid.addEventListener("click", function reset () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

})