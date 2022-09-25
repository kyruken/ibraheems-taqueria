import {changePage} from './index.js';

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

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    nav.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', changePage())
    })

    nav.appendChild(restaurantName);

    return nav;

}