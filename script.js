// function to create grid and event listeners for hover effects
const createGrid = (size) => {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        // Add event listeners for hover effect
        square.addEventListener('mouseenter', () => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            square.style.backgroundColor = randomColor;
        });
        container.appendChild(square);
    }
}

createGrid(16); // Initial grid creation

document.getElementById('resize-button').addEventListener('click', () => {
    const newSize = prompt("Enter new grid size (max 100)", 16);
    if (newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Size too large. Please enter a number up to 100.");    }
});