function changeColor() {
    const colors = ['#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#34495e'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
