// Même principe que l’exercice précédent, utilisez une nouvelle fonction “sleep” pour effectuer la même action (ajout d’un 
//     élément p après 2 secondes) a la suite du click sur le bouton.
//     Pour cela, vous devrez utiliser .then
//pour utiliser sleep, vous devrez l'ajouter en amont de votre code javascript 

const sleep = (milliseconds) => { 
    return new Promise(resolve => setTimeout(resolve, milliseconds)) 
}

document.querySelector("button").addEventListener("click", () => {
    sleep(2000)
        .then(() => {
        let p = document.createElement("p");
        p.textContent = "add-me" 
        document.body.append(p);
        })
})