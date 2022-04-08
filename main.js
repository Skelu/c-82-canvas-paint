canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x, last_position_y ;

color="blue";
width_line=2;

canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);

function my_mousedown(e){
    mouseEvent="mousedown";   
}
function my_mouseleave(e){
    mouseEvent="mouseleave";   
}
function my_mouseup(e){
    mouseEvent="mouseup";   
}
function my_mousemove(e){
current_position_mouse_x=e.clientX-canvas.offsetLeft;
current_position_mouse_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;

    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
    ctx.stroke();
}
last_position_x=current_position_mouse_x;
last_position_y=current_position_mouse_y;
}