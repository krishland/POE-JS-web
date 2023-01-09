// Ajouter l’élément <p id=”result”>hovered</p> comme enfant de div.content lorsque l’élément <p 
// id=”hoverme”>hoverme</p>
// est survolé par la sourie

document.getElementById("hoverme").addEventListener("mouseover", (e) = () => {
    let myP = document.createElement("p");
    myP.setAttribute("id", "result");
    myP.innerHTML = "hovered";
    document.querySelector("div.content").appendChild(myP);
})