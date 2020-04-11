let columns = 50;
let rows = 50;
let color = "rgb(132, 105, 255)";

console.log(columns);

let pointerDown = false;

const grid = document.querySelector(".grid-container");
grid.style.gridTemplateColumns =`repeat(${columns}, 1fr)`;
grid.style.gridTemplateRows =`repeat(${rows}, 1fr)`;

document.addEventListener("mousedown", (e) => 
{
    pointerDown = true;
});

document.addEventListener("mouseup", (e) =>
{
    pointerDown = false;
});

function changeColor(e)
{
    e.target.style.backgroundColor = color;
}

for (let i = 0; i < rows; i++) 
{
    for (let j = 0; j < columns; j++) 
    {
        let newDiv = document.createElement("div");

        newDiv.addEventListener("mouseover", (e) => {if(pointerDown) changeColor(e); });

        newDiv.addEventListener("click", changeColor);
      
        grid.appendChild(newDiv);
    }
    
}




