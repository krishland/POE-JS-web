// créez un bouton possédant l’id “toggle”, Ajoute ou enlève une classe “is-open” sur la div possédant l’id “modal”.
// si “is-open” est présent lors du click, enlève “is-open” de la class de “modal”
// si “is-open” est absent lors du click, ajoute “is-open” a la classe modal

let myBtn = document.createElement("button");
myBtn.setAttribute("id", "toggle");
myBtn.innerText = "click";
document.body.appendChild(myBtn);

document.getElementById("toggle").addEventListener("click", (e) = () => {
    document.getElementById("modal").classList.toggle("is-open");
});