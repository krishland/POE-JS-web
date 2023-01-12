document.querySelectorAll("button").forEach((i) => {
    i.addEventListener("click", async (e) => {
        try {
            await sleepThrow(2000, e.target.id === "success")
            let p = document.createElement("p");
            p.setAttribute("id", "success")
            p.textContent = "Success";
            p.style.backgroundColor = "green"
            document.body.append(p);

        } catch (e) {
            let p = document.createElement("p");
            p.setAttribute("id", "error")
            p.textContent = "Fail";
            p.style.backgroundColor = "red"
            document.body.append(p);
        }
    })
})