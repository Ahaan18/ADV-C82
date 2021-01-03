var mouseEvent = "empty";
var oldX,oldY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown",line);
function line(e){
    color = document.getElementById("inpy").value;
    width = document.getElementById("inpyt").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",line1);
function line1(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("Last position of X and Y = ");
        console.log("x = "+oldX+"Y = "+oldY);
        ctx.moveTo(oldX,oldY);
        console.log("Current position of X and Y = ");
        console.log("x = "+currentX+"Y = "+currentY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    }
    oldX = currentX;
    oldY = currentY;
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }
canvas.addEventListener("mouseup", funmouseup);
function funmouseup(e)
{ mouseEvent = "mouseup"; }
canvas.addEventListener("mouseleave", funmouseleave);
function funmouseleave(e)
{ mouseEvent = "mouseleave"; }