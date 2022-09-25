import home from './home.js';
import navbar from './navbar.js';

function initHomePage() {
    const content = document.getElementById("content");
    document.body.appendChild(navbar());
    document.body.appendChild(home());
}

export {initHomePage}