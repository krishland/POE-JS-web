// Créer une horloge sur votre site, la date est l’heure est affiché et est mis a jour toutes les secondes.
// la date et l’heure seront affiché au format “j/m/a h:m:s”

let myClock = document.createElement("div");
document.body.appendChild(myClock);

function currentTime() {
    let date = new Date();
    let j = date.getDate();
    
    let m = date.getMonth()+1;
    let a = date.getFullYear();
    let h = date.getHours();
    let mn = date.getMinutes();
    let s = date.getSeconds();
    let time =j + "/" + m + "/" + a + " " + h + ":" + mn + ":" + s;
  
    myClock.innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 30000);
}
  
currentTime();