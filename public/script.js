window.onload = function() {
    const squares = document.querySelectorAll('.grid > div');
    squares.forEach(square => {
        square.style.backgroundColor = getRandomColor();
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
