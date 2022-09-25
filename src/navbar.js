import {removePage, changePage} from './index.js';
import menu from './menu.js';
import home from './home.js';

export default function navbar() {

    const nav = document.createElement('nav');

    const restaurantName = document.createElement('h1');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const aboutButton = document.createElement('button');

    restaurantName.textContent = `Ibraheem's Taqueria`;
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    aboutButton.textContent = 'About';

    homeButton.addEventListener('click',() => {
        removePage();
        changePage(home());
    })

    menuButton.addEventListener('click',() => {
        removePage();
        changePage(menu());
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    nav.appendChild(restaurantName);

    return nav;

}