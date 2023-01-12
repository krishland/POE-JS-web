document.querySelector("button").addEventListener("click", () => {
    setTimeout(() => {
        let p = document.createElement("p");
        p.textContent = "add-me" 
        document.body.append(p);
        }, 2000);
})