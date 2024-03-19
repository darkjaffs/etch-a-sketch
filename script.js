
const container = document.getElementById('container');
const resetbtn = document.getElementById('reset');
const inputSize = document.getElementById('inputtxt');

initializeGrid();

function gridLength() {
    if (inputSize.value > 100)
    {
        alert("Please enter a value below 100! Defaulting to 16");
        inputSize.value = 16;
    }
    return inputSize.value;
}

function generateGrid() {

    let gridElement = gridLength();
    let gridSize = 500 / gridElement;

    for (let i = 0; i < gridElement; i++) {
        for (let j = 0; j < gridElement; j++) {
            const div = document.createElement('div');

            div.classList.add("grid-item");

            // Set the position of each grid item

            div.style.width = `${gridSize}px`;
            div.style.height = `${gridSize}px`;

            // Append the grid item to the body
            container.appendChild(div);

            div.addEventListener("mouseover", () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                div.style.backgroundColor = "#" + randomColor;
            })
        }
    }
};

function initializeGrid() {
    document.addEventListener('DOMContentLoaded', generateGrid());
}

resetbtn.addEventListener('click', function () {
                
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        container.removeChild(item);
    })
    
    generateGrid();
});















