import {initHomePage} from './website.js';

function changePage() {
    document.body.removeChild(home());
}

initHomePage();

export {changePage};