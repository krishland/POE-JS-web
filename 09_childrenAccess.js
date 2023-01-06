let childrenAccess = () => {
    let firstChild = document.getElementById("menu").getElementsByTagName("li");
    return firstChild[0].innerHTML;
}

module.export = childrenAccess;