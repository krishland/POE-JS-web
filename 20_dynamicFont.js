let myForm = document.getElementById("fontsize");

document.getElementById("fontsize").addEventListener("input", () => {
    let elems = document.getElementsByClassName("controlled_fontsize")
    elems = [...elems];
    elems.map(i => i.style.fontSize = myForm.value + "px");
})

