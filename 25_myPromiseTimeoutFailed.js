const sleepThrow = (milliseconds, boolean) => { 
    return new Promise((resolve, reject) => setTimeout(() => {
        if (boolean === true) { resolve("success");
        } else { reject("failed");
        }
    }, milliseconds)) 
}

module.exports = sleepThrow;