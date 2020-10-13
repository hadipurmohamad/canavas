var button1 =document.getElementById("save");
var button2 =document.getElementById("reset");
var button3 =document.getElementById("brush");
var button4 =document.getElementById("erase");
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