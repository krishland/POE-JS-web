let arr = ["btn", "secondary", "warning", "danger"];
let color = ["blue", "grey", "yellow", "red"];
for (let y = 0; y < arr.length; y++) {
    let match = document.getElementsByClassName(`${arr[y]}`);
    for (let i = 0; i < match.length; i++) {
        match[i].style.backgroundColor = `${color[y]}`;
    }
}

