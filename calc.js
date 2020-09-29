var num = document.getElementById("num");
var rs = document.getElementById("rs");
var clr = ["blue", "red", "green", "orange", "rgb(234,65,345)", "lightblue", "cyan"];
var x = 0;

function clrchange() {
    document.getElementById("num").style.backgroundColor = clr[x];
    x++;
}