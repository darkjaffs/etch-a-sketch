
const container = document.getElementById('container');
const resetbtn = document.getElementById('reset');

initializeGrid();

function generateGrid() {

    let gridElement = 16;
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
                div.style.backgroundColor = 'black';
            })

            resetbtn.addEventListener('click', function () {

                const gridItems = document.querySelectorAll('.grid-item');
                let gridArray = Array.from(gridItems);

                gridItems.forEach(item => {
                    item.style.backgroundColor = '';
                })

                
            });

        }
    }
};

function initializeGrid() {
    document.addEventListener('DOMContentLoaded', generateGrid());
}















