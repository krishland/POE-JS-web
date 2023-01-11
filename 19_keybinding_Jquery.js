$("body").keydown((e) => {
    let x = parseInt($("#square").css("left").replace(/[^-\d\.]/g, ''));
    let y = parseInt($("#square").css("top").replace(/[^-\d\.]/g, ''));
    console.log(x)
    console.log(y)
    if (e.key === "ArrowUp") {y -= 10;}
	if (e.key === "ArrowDown") {y += 10;}
    if (e.key === "ArrowLeft") {x -= 10;}
    if (e.key === "ArrowRight") {x += 10;}		
    $("#square").css("left", `${x}px`);
    $("#square").css("top", `${y}px`);
})