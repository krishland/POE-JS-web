let childrenAccess = () => {
    let child = document.getElementById("menu");
    return child.firstElementChild.textContent;
}

module.export = childrenAccess;