import home from './home.js';

function initHomePage() {
    const content = document.getElementById("content");
    document.body.appendChild(home());
}

initHomePage();