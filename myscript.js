let gridNumber = 0;
const body = document.querySelector("body");
const button = document.querySelector("button");
button.textContent = "Change Grid Size";
button.addEventListener("click", () => {
    gridNumber = prompt("What by what grid would you like? (Up to 100)");
    if(gridNumber <= 100){
    deleteGrid();
    makeGrid(gridNumber);
    }
    else{
        alert("You chose a number over 100 please try again!");
    }
})
function makeGrid (gridNumber = 16){
const container = document.querySelector(".container");
for (let i = 0; i < gridNumber; i++){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row_div");    
    container.append(rowDiv);
    for(let j = 0; j < gridNumber; j++){
        const colDiv = document.createElement("div");
        colDiv.classList.add("border");
        cellSize = 960/gridNumber;
        colDiv.style.height = cellSize + "px";
        colDiv.style.width = cellSize + "px";
        rowDiv.append(colDiv);
    }
}
const allDiv = document.querySelectorAll(".border")

allDiv.forEach((div)=>{
    div.addEventListener("mouseover", () => {
        if(div.style.backgroundColor === ""){
        div.style.backgroundColor = generateRandomRGB();
        }
    })
})
}

function generateRandomRGB(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function deleteGrid(){
    const allDiv = document.querySelectorAll(".border")
    allDiv.forEach((div)=>{
        div.remove()
        })
    }
makeGrid(16);

