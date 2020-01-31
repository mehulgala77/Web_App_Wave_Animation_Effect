
const container = document.querySelector(".container");
const rows = 15;
const cols = 15;
const circles = [];

// Create Circles
for (let i = 0; i < rows; i++) 
{
    circles[i] = [];

    for (let j = 0; j < cols; j++) 
    {
        const elem = document.createElement("div");
        elem.classList.add("circle");

        container.appendChild(elem);
        circles[i].push(elem);
    }
}

// Add Event Listener
for (let i = 0; i < circles.length; i++) 
{
    for (let j = 0; j < circles[i].length; j++) 
    {
        circles[i][j].addEventListener("click", () => {
            growCircle(i, j);
        });
    }
}

// Handle Wave logic
const growCircle = (i, j) => {
    if (i < 0 || i >= rows) return;
    if (j < 0 || j >= cols) return;

    if (!circles[i][j].classList.contains("grow")) {
        circles[i][j].classList.add("grow");

        // Grow neighbors
        setTimeout(() => {
            growCircle(i + 1, j);
            growCircle(i - 1, j);
            growCircle(i, j - 1);
            growCircle(i, j + 1);
        }, 100);

        setTimeout(() => {
            circles[i][j].classList.remove("grow");
        }, 400);
    }

    
};