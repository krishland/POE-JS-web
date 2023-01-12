document.querySelectorAll("button").forEach((i) => {
    i.addEventListener("click", async (e) => {
        try {
            await sleepThrow(2000, e.target.id === "success")
            let p = document.createElement("p");
            p.setAttribute("id", "success")
            p.textContent = "Success";
            p.style.color = "green"
            document.body.append(p);

        } catch {
            let p = document.createElement("p");
            p.setAttribute("id", "error")
            p.textContent = "Fail";
            p.style.color = "red"
            document.body.append(p);
        }
    })
})