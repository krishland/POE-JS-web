// créez un carré de 50px sur 50px en html (aidez vous de backgroundColor pour la visualisation), ce carré possèdera 
// une position: absolute, ce carré possédera l’id “square”
// déplacer le carré de 10px dans la direction donné par les touches du clavier (haut bas gauche droite
document.body.style.margin = "0px"
let myDiv = document.createElement("div")
myDiv.style.width = "100vw"
myDiv.style.height = "100vh"
document.body.appendChild(myDiv)

let mySquare = document.createElement("div")
mySquare.setAttribute("id", "square")
mySquare.style.width = "50px"
mySquare.style.height = "50px"
mySquare.style.left = "0px" 
mySquare.style.top = "0px" 
mySquare.style.backgroundColor = "red"
myDiv.appendChild(mySquare)

document.body.addEventListener("keydown", (e) = () => {
    mySquare.style.top = mySquare.style.top + "50px"
})
