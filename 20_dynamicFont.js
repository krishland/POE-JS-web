// ajouter un champ de formulaire de type nombre, ce champs devra posséder l’id “fontsize”
// Appliquer en tant que fontSize, la valeur du champ aux éléments possédant la classe “controlled_fontsize”

let myForm = document.createElement("input");
myForm.setAttribute("type", "number");
myForm.setAttribute("id", "fontsize");
document.body.appendChild(myForm);

myForm.addEventListener("input", (e) => {
    console.log(e.data)
    let elems = document.getElementsByClassName("controlled_fontsize")
    elems = [...elems];
    console.log(elems)
    elems.map(i => i.style.fontSize = e.data + "px");
})

