let columns = 5;
let rows = 5;

const grid = document.querySelector(".grid-container");
grid.style.gridTemplateColumns =`repeat(${columns}, 1fr)`;
grid.style.gridTemplateRows =`repeat(${rows}, 1fr)`;

for (let i = 0; i < rows; i++) 
{
    for (let j = 0; j < columns; j++) 
    {
        let newDiv = document.createElement("div");
      
        grid.appendChild(newDiv);
    }
    
}


