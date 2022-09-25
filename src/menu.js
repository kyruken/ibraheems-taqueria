import menuItems from './items.js'

export default function menu() {
    const menuContainer = document.createElement('div');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menu';

    menuContainer.appendChild(menuTitle);

    for (let x = 0; x < menuItems.length; x++) {
        let foodContainer = document.createElement('div');
        
        let foodTitle = document.createElement('h3');
        let foodDescription = document.createElement('p');
        let foodPrice = document.createElement('p');

        foodTitle.textContent = menuItems[x].title;
        foodDescription.textContent = menuItems[x].description;
        foodPrice.textContent = menuItems[x].price;

        foodContainer.appendChild(foodTitle);
        foodContainer.appendChild(foodDescription);
        foodContainer.appendChild(foodPrice);

        menuContainer.appendChild(foodContainer);
        
    }

    return menuContainer;
}