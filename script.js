const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');//ctx stands for context and it is used to draw on canvas

ctx.fillStyle = 'red';
ctx.fillRect(100, 70, 200, 150);

ctx.strokeStyle = 'rgba(152, 218, 152, 0.8)';
ctx.lineWidth = 4;
ctx.strokeRect(100, 70, 200, 150);

ctx.beginPath();
ctx.moveTo(100, 70);
ctx.lineTo(300, 220);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.stroke(); //use to draw the line

ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI * 2);//we can use true false at end after that to form clock and anticlockwise circle
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 50);
ctx.lineTo(600, 120);
ctx.lineTo(450, 220);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();
ctx.strokeStyle = 'pink';
ctx.lineWidth = 2;
ctx.stroke();

//pentagon
ctx.beginPath();
ctx.moveTo(50, 300);//top point
ctx.lineTo(100, 250);//right point
ctx.lineTo(150, 300);//bottom right point
ctx.lineTo(125, 350);//bottom left point
ctx.lineTo(75, 350);
ctx.closePath();
ctx.fillStyle = 'purple';
ctx.fill();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 2;
ctx.stroke();

function drawHouse(x, y, size) {
    // Draw the base of the house
    ctx.fillStyle = 'brown';
    ctx.fillRect(x, y, size, size);

    // Draw the roof of the house
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size / 2, y - size / 2);//size for roof is half of the size of the base
    ctx.lineTo(x + size, y);
    ctx.closePath();
    ctx.fillStyle = 'darkred';
    ctx.fill();
    ctx.strokeStyle = 'pink';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw the door of the house
    ctx.fillStyle = 'sienna';
    ctx.fillRect(x + size / 3, y + size / 2, size / 3, size / 2);

    // Draw the windows of the house
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(x + size / 6, y + size / 4, size / 6, size / 6);
    ctx.fillRect(x + size / 2, y + size / 4, size / 6, size / 6);
}

// Draw multiple houses
drawHouse(300, 300, 100);
drawHouse(450, 300, 80);