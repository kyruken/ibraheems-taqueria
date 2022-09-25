import menuItems from './items.js'

export default function menu() {
    console.log(menuItems[0]);

    const menuContainer = document.createElement('div');
    const menuTitle = document.createElement('h2');

    menuTitle.textContent = 'Menu';

    menuContainer.appendChild(menuTitle);

    return menuContainer;
}