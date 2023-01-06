let tagSelector = () => {
    return document.getElementsByTagName("button")[0];
}

console.log(tagSelector()); // element>button 
console.log(tagSelector().innerHTML); //"hello"

module.exports = tagSelector;