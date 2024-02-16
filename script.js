// function to create grid and event listeners for hover effects
const createGrid = (size) => {
    const container = document.getElementById('grid-container');
    container.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.dataset.interactions = 0; // Initialize interaction count

        // Add event listeners for hover effect
        square.addEventListener('mouseenter', () => {
            let interactions = parseInt(square.dataset.interactions);
            square.dataset.interactions = interactions + 1;

            // Calculate new color
            const darkenFactor = interactions / 10;
            const [r, g, b] = square.style.backgroundColor.match(/\d+/g).map(Number);
            const newColor = `rgb(${r * (1 - darkenFactor)}, ${g * (1 - darkenFactor)}, ${b * (1 - darkenFactor)})`;

            // Apply new color
            square.style.backgroundColor = newColor;
        });

        // Set initial random color
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        square.style.backgroundColor = randomColor;

        container.appendChild(square);
    }
}


createGrid(16); // Initial grid creation

document.getElementById('resize-button').addEventListener('click', () => {
    const newSize = prompt("Enter new grid size (max 100)", 16);
    if (newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Size too large. Please enter a number up to 100.");    
    }
});