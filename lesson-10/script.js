'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    function newElem() {
        if (selector[0] == ".") {
            let div = document.createElement('div');
            div.className = selector;
            div.style.cssText = `height:${height}px; width:${width}px; background:${bg}; font-size:${fontSize}px;`;
            div.innerHTML = "Какой то текст в div";
            document.body.appendChild(div);
        } else if (selector[0] == "#") {
            let p = document.createElement('p');
            p.style.cssText = `height:${height}px; width:${width}px; background:${bg}; font-size:${fontSize}px;`;
            p.innerHTML = "Какой то текст в p";
            document.body.appendChild(p);
        }
    }
    newElem();
}

let newSelector = prompt("Введите строку начинающуюся с '.' или '#'");

let element = new DomElement(newSelector, 50, 100, '#ccc', 15);