const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const WIDTH = ctx.canvas.width;
const HEIGHT = ctx.canvas.height;

var gameState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function drawGrid() {
    const lineWidth = 10;
    for (let i = 0; i < 2; i++) {
        ctx.fillRect((i+1)*(WIDTH/3)-lineWidth/2, 0, lineWidth, HEIGHT);
    }
    for (let i = 0; i < 2; i++) {
        ctx.fillRect(0, (i+1)*(HEIGHT/3)-lineWidth/2, WIDTH, lineWidth);
    }
}

function drawEverythingElse(state) {

}

function draw() {
    drawGrid();
}

function render() {
    draw();
    window.requestAnimationFrame(() => {render();});
}

window.requestAnimationFrame(() => {render();});