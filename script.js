const createGrid = document.querySelector("#createGrid");
const resetGrid = document.querySelector("#resetGrid");
const gridContainer = document.querySelector(".gridContainer");
const square = document.querySelector(".square");
const divs = document.querySelector("div");

function draw(e) {
    e.target.style.background = "chartreuse";
    opacity = e.target.style.opacity;
    e.target.style.opacity = (parseFloat(opacity) + 0.1);
}

setTimeout(draw, 20000);

createGrid.addEventListener("click", function gridSize() {

    let gridNum = prompt("Enter an amount. 100 being the smallest brush size:");

    if (gridNum > 100) {
        alert("Please enter a number under 100.");
    } else {
        let gridSize = gridNum * gridNum;

        for (var i = 0; i < gridSize; i++) {
            const newSquare = document.createElement("div");
            newSquare.setAttribute("class", "square");
            gridContainer.appendChild(newSquare);

            newSquare.style.width = (960 / gridNum) + "px";
            newSquare.style.height = (960 / gridNum) + "px";
            newSquare.style.opacity = "0";
            
            resetGrid.addEventListener("click", () => {
                newSquare.style.background = "transparent";
            })

            newSquare.addEventListener("mouseover", draw);


        }
        document.querySelectorAll(square);
    }
});