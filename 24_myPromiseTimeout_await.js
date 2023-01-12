// Même principe que l’exercice précédent, utilisez une nouvelle fonction “sleep” pour effectuer la même action (ajout d’un 
//     élément p après 2 secondes) a la suite du click sur le bouton.
//     Pour cela, vous devrez utiliser les async await

const sleep = (milliseconds) => { 
    return new Promise(resolve => setTimeout(resolve, milliseconds)) 
}

document.querySelector("button").addEventListener("click", async () => {
    await sleep(2000);
    let p = document.createElement("p");
    p.textContent = "add-me";
    document.body.append(p);
})
