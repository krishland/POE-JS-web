let mySquare = document.getElementById("square");
mySquare.style.left = "0px";
mySquare.style.top = "0px";


document.addEventListener('keydown', (e) => {
    let x = parseInt(mySquare.style.left, 10);
    let y = parseInt(mySquare.style.top, 10);
    if (e.key === "ArrowUp") {y -= 10;}
	if (e.key === "ArrowDown") {y += 10;}
    if (e.key === "ArrowLeft") {x -= 10;}
    if (e.key === "ArrowRight") {x += 10;}		
    mySquare.style.left = x + "px";
    mySquare.style.top = y + "px";
    console.log(mySquare.style.top)
})