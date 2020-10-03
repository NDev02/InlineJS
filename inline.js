window.addEventListener('load', () => { checkElement(document.querySelector('body')) });

let inlineIdentifier = ';'

function checkElement(root) {
    for(let elm of root.childNodes) {
        if(elm.nodeType == 3 && elm.parentNode.nodeName != "SCRIPT") {
            let data = "";
            let currentBlock = "";
            let updated = false;
            let inBlock = false;
            for(let char of elm.data.replace(/\n/g, "")) {
                if(inBlock) {
                    if(char != " ") {
                        currentBlock += char;
                    } else {
                        data = data + eval(currentBlock) + char;
                        currentBlock = "";
                        inBlock = false;
                        updated = true;
                    }
                } else if(char == inlineIdentifier) {
                    inBlock = true;
                } else {
                    data += char;
                }
            }
            if(inBlock) {
                data = data + eval(currentBlock);
                currentBlock = "";
                inBlock = false;
                updated = true;
            }
            if(updated) {
                elm.replaceWith(data);
            }
        }
        if(elm.childNodes.length > 0) {
            checkElement(elm);
        }
    }
}