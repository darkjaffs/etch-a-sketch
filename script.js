
document.addEventListener('DOMContentLoaded', function () {

    const container = document.getElementById('container');

    let rows = 16;
    let columns = 16;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const div = document.createElement('div');

            div.classList.add("grid-item");

            // Set the position of each grid item
            div.style.left = j * 100 + "px";
            div.style.top = i * 100 + "px";

            // Append the grid item to the body
            container.appendChild(div);

        }
    }
});

