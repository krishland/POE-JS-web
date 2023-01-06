let content = () => {
    return document.getElementsByClassName("x-wing")[2].innerHTML
}

console.log(content())

module.exports = content;