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

