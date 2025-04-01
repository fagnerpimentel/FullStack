let canvas1 = document.getElementById('canvas1');
let ctx = canvas1.getContext('2d');

// retângulos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(0,0,70,70);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(70,0);
ctx.lineTo(70,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


// texto
ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeText("Olá",205,350)
ctx.fillText("Olá",200,350);
ctx.closePath();


let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas2.getContext('2d');
