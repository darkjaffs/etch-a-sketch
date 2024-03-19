
const container = document.getElementById('container');
generateGrid();

function generateGrid() {
    document.addEventListener('DOMContentLoaded', function () {

        
        let rows = 10;
        let columns = 10;
        let gridSize = 500/rows;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const div = document.createElement('div');

                div.classList.add("grid-item");
               
                // Set the position of each grid item
                div.style.display = 'flex';
                div.style.width = `${gridSize}px`;
                div.style.height = `${gridSize}px`;
                div.style.flex = '1 1 auto';
                // Append the grid item to the body
                container.appendChild(div);

                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = 'black';
                })

            }
        }
    });
}







