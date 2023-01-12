document.querySelectorAll("button").forEach((i) => {
    i.addEventListener("click", (e) => {
    sleepThrow(2000, e.target.id === "success")
        .then(()=>{
            let p = document.createElement("p");
            p.setAttribute("class", "success")
            p.textContent = "Success";
            p.style.color = "green"
            document.body.append(p);
        })

        .catch(() => {
            let p = document.createElement("p");
            p.setAttribute("class", "error")
            p.textContent = "Fail";
            p.style.color = "red"
            document.body.append(p);
        })
    })
})
