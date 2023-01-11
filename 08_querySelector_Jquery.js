let arr = ["btn", "secondary", "warning", "danger"];
let color = ["blue", "grey", "yellow", "red"];
for (let y = 0; y < arr.length; y++) {
    for (let i = 0; i < $(`.${arr[y]}`).length; i++) {
        $(`.${arr[y]}`)[i].style.backgroundColor = `${color[y]}`;
    }
}

