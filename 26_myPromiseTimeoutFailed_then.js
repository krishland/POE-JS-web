// // importez votre exercice 25, utilisez sleep et sleepThrow sur 2 boutons:
// // un click sur le bouton#success ajoutera un élément p.success
// // un click sur le bouton#fail ajoutera un élément p.error
// La méthode de gestion d’erreur sera .catch()
// astuce: utilisez les classes css pour changer la couleur du texte et faciliter le développemen

const main = require("./25_myPromiseTimeoutFailed.js");

document.querySelectorAll("button").addEventListener("click", () => {
    console.log(e.target.id)
    sleepThrow(2000, e.target.id)
        .then(()=>{
            let p = document.createElement("p");
            p.setAttribute("id", "success")
            p.textContent = "Success";
            p.style.backgroundColor = "green"
            document.body.append(p);
        })

        .catch((e) => {
            let p = document.createElement("p");
            p.setAttribute("id", "fail")
            p.textContent = "Fail";
            p.style.backgroundColor = "red"
            document.body.append(p);
        })
})

