document.getElementById("clickme").addEventListener("click", (e) = () => {
        let myP = document.createElement("p");
        myP.setAttribute("id", "result")
        myP.innerHTML = "clicked";
        document.querySelector("div.content").appendChild(myP);
    }
);
