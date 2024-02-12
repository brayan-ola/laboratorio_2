// Evento Mause
document.getElementById("box1").addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
});

document.getElementById("box1").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
});






// Eventos click
document.getElementById("box2").addEventListener("click", function() {
    this.style.backgroundColor = "Green";
});

function cambiarfrase(){
    document.getElementById("parrafo1").innerHTML = "Onclick"
}







// Eventos Focus
document.getElementById("input1").addEventListener("focus", function() {
    this.style.border = "5px solid blue";
});

document.getElementById("input1").addEventListener("blur", function() {
    this.style.border = "4px solid White";
});
