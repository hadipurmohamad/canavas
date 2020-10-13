var canavas = document.getElementById("canvas");
var c=canavas.getContext("2d");
canavas.Width = window.innerWidth;

var mouse=false;
c.lineJoin="round";
c.lineCap="round";
var positionX,positionY;
var brush = document.getElementById("brush");
function getCoordinates(canavas, e) {
    var rect = canavas.getBoundingClientRect();// گرفتن مختصات بوم
    return{
        x:e.layerX,//گرفتن مختصات ماوس 1
        y: e.layerY - rect.top //2 گرفتن مختصات بوم
   //هم با یک میتوان انچام داد هم با دو
    }

}
function brushDown(e) {
    muse=true;
    var coordinates=getCoordinates(canavas,e);
    positionX=coordinates.x;
    positionY=coordinates.y;
    c.moveTo(positionX, positionY);
    c.lineTo(positionX, positionY);
    c.stroke();
}
function brushMove(e) {
    
}
function brushUp(e) {
    
}
function brushClick(params) {
    var brushColor = document.getElementById("myColor");
    c.strokeStyle=brushColor.value;
    
    brush.style.border = "2px solid " +brushColor.value+"" ;
    canavas.addEventListener("mousedown",brushDown,false);
    canavas.addEventListener("mousemove",brushMove,false);
    canavas.addEventListener("mouseup",brushUp,false);
}
brush.addEventListener("click",brushClick);




















//--------------------------------------------------
var button1 =document.getElementById("save");
var button2 =document.getElementById("reset");
function click1(params) {
    document.getElementById("save").style.background = "#900C3F";
}
function click2(params) {
    document.getElementById("save").style.background = "";
}
function click3(params) {
    document.getElementById("reset").style.background = "#900C3F";
}
function click4(params) {
    document.getElementById("reset").style.background = "";
}
button1.addEventListener("mousedown",click1);
button1.addEventListener("mouseup",click2);
button2.addEventListener("mousedown",click3);
button2.addEventListener("mouseup",click4);
//-------------------------------------------------