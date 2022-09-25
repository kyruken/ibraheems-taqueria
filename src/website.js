import home from './home.js';
import navbar from './navbar.js';

function initHomePage() {
    const content = document.getElementById("content");
    content.appendChild(home());
    document.body.prepend(navbar());
}

export {initHomePage}