const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(100, 70, 200, 150);

ctx.strokeStyle = 'rgba(152, 218, 152, 0.8)';
ctx.lineWidth = 4;
ctx.strokeRect(100, 70, 200, 150);