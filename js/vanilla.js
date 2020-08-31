function createHtmlCode(text){
    return `<div>${text}</div>`
}

document.querySelector('#page-wrap').innerHTML += createHtmlCode('testing');