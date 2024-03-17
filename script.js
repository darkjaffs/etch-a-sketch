
const container = document.getElementById('container');
generateGrid();

function generateGrid() {
    document.addEventListener('DOMContentLoaded', function () {


        let rows = 16;
        let columns = 16;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const div = document.createElement('div');

                div.classList.add("grid-item");

                // Set the position of each grid item

                div.textContent = '';
                div.style.width = '50px';
                div.style.height = '50px';
                // Append the grid item to the body
                container.appendChild(div);

                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = 'black';
                })

            }
        }
    });
}







