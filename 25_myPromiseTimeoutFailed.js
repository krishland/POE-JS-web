// Modifiez la fonction sleep pour qu’elle déclenche une erreur (throw) lors de son éxecution.
// Cela nous permettra de simuler le comportement d’une requête qui échoue si le 2e argument est faux

// sleepThrow(2000, true); //success 
// sleepThrow(2000, false); //faile
// la fonction sleepError devra être exporté via un module.exports
// indice: newPromise((resolve, reject) ⇒ ...));

const sleepThrow = (milliseconds, boolean) => { 
    return new Promise((resolve, reject) => setTimeout(() => {
        if (boolean === false) { reject("failed")
        } else { resolve("success")}
    }, milliseconds)) 
}

module.exports = sleepThrow;