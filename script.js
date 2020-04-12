let color = "rgb(132, 105, 255)";
let pointerDown = false;

const grid = document.querySelector(".grid-container");


document.addEventListener("mousedown", (e) => { pointerDown = true; });

document.addEventListener("mouseup", (e) => { pointerDown = false; });

function changeColor(e)
{
    e.target.style.backgroundColor = color;
}

function createGrid(size)
{
    grid.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows =`repeat(${size}, 1fr)`;

    for (let i = 0; i < size; i++) 
    {
        for (let j = 0; j < size; j++) 
        {
            let newDiv = document.createElement("div");

            newDiv.addEventListener("mouseover", (e) => {if(pointerDown) changeColor(e); });

            newDiv.addEventListener("click", changeColor);
        
            grid.appendChild(newDiv);
        }
        
    }
}

function deleteGrid()
{
    grid.innerHTML = "";
}

createGrid(50);

const gridSlider = document.getElementById("gridRange");
gridSlider.addEventListener("input", (e) => 
{
    deleteGrid();
    createGrid(e.target.value);
});




