const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');//ctx stands for context and it is used to draw on canvas

ctx.save();//we save the current state of the canvas

ctx.shadowColor = 'rgba(143, 27, 27, 0.7)';//we set the shadow color to black with 50% opacity
ctx.shadowBlur = 15;//we set the shadow blur to 10 pixels
ctx.shadowOffsetX = 25;//we set the shadow offset in x direction to 5 pixels
ctx.shadowOffsetY = 25;//we set the shadow offset in y direction to 5 pixels
const linearGradient = ctx.createLinearGradient(50,100,200,100);
linearGradient.addColorStop(0, 'red');
linearGradient.addColorStop(0.4, 'blue');
linearGradient.addColorStop(0.8, 'green');
ctx.fillStyle = linearGradient;
ctx.fillRect(50,100,150,100);

ctx.restore();//we restore the previous state of the canvas

ctx.save();//apply shadow for the radial gradient circle
ctx.shadowColor = 'rgba(241, 133, 133, 0.35)';
ctx.shadowBlur = 20;
ctx.shadowOffsetX = 8;
ctx.shadowOffsetY = 8;

const radialGradient = ctx.createRadialGradient(350,150,20,350,150,100);//we create two circles one with radius 20 and other with radius 100
radialGradient.addColorStop(0, 'yellow');
radialGradient.addColorStop(0.4, 'orange');
radialGradient.addColorStop(0.8, 'red');
ctx.fillStyle = radialGradient;
ctx.beginPath();
ctx.arc(350,150,100,0,Math.PI*2);
ctx.fill();
ctx.restore();