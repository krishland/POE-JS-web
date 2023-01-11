$("body").append($('<button id="toggle">click</button>')).click(() => {
    $("#modal").toggleClass("is-open")
});