import {initHomePage} from './website.js';

let node = document.getElementById('content');

function removePage() {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
}

function changePage(newPage) {
    node.appendChild(newPage);
}

initHomePage();

export {removePage, changePage};