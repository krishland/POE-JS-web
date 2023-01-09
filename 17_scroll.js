window.addEventListener("scroll", (e) = () => {
    let myDate = document.createElement("p");
    myDate.innerHTML = `Date: ${Date()}`;
    document.body.appendChild(myDate);
})