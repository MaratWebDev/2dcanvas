console.log("test");
const canvas = document.querySelector("canvas");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

// Creating shapes
// filling canvas 
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

// square

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(375, 75, 100, 100);

// rectangles

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(250, 250, 100, 150);

ctx.fillStyle = "rgba(255, 0, 255 , 0.75)";
ctx.fillRect(350, 100, 175, 50);

// Frame made by strokes
ctx.lineWidth = 5;
ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.lineWidth = 10;
ctx.strokeRect(25, 25, 175, 200);

// creating complex shape
function degToRad(degrees) {
    return degrees * Math.PI / 180;
};
// triangle

ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
let triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();


// circle 

ctx.fillStyle = "rgb(0, 0, 255)";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();

// pacman

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 40, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();