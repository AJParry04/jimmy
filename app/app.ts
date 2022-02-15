import {ctx, canvas} from './canvas';
import {makeButton} from './controls';

//basic drawing tool
let drawButton = makeButton("Draw");

drawButton.addEventListener(
  "click",
  function () {}
)

function drawPencil (
x:number,
y:number
){
  ctx.beginPath();
  ctx.arc(x,y,25/2,0,Math.PI*2);
  ctx.fill();
}
canvas.addEventListener (
  "click",
 function (event) {
  drawPencil(event.offsetX,event.offsetY)
 }
)

drawButton.addEventListener(
  "click",
  function(){
    drawFunction=drawPencil
  })
 


 canvas.addEventListener(
  "mousemove",
  function (event) {
    if (event.buttons === 1) {
      drawPencil(event.offsetX, event.offsetY);
    }
  }
);
 canvas.addEventListener(
  "mousemove",
  function (event) {
    if (event.buttons === 1) {
      drawFunction(event.offsetX, event.offsetY);
    }
  }
);

//color buttons
let blueButton = makeButton('Red');
blueButton.addEventListener(
  "click",
  function(){
    ctx.strokeStyle = '#ADD8E6';
    ctx.fillStyle = '#ADD8E6'
  }
)
let redButton = makeButton('Blue');
redButton.addEventListener(
  "click",
  function(){
    ctx.strokeStyle = '#FF7F7F';
    ctx.fillStyle = '#FF7F7F'
  }
)

//clear
let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    )
  }
)







