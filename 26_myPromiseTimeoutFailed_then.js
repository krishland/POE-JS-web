document.querySelectorAll("button").forEach((i) => {
    i.addEventListener("click", (e) => {
    sleepThrow(2000, e.target.id === "success")
        .then(()=>{
            let p = document.createElement("p");
            p.setAttribute("id", "success")
            p.textContent = "Success";
            p.style.color = "green"
            document.body.append(p);
        })

        .catch((e) => {
            let p = document.createElement("p");
            p.setAttribute("id", "error")
            p.textContent = "Fail";
            p.style.color = "red"
            document.body.append(p);
        })
    })
})
