import Icon from './image0.jpeg';
function header() {
    const header = document.createElement('header');

    const restaurantName = document.createElement('h1');
    const restaurantType = document.createElement('h2');
    const description = document.createElement('p');
    const headerImage = new Image();

    restaurantName.textContent = `Ibraheem's Taqueria`;
    restaurantType.textContent = 'Indian and Mexican Fusion';
    description.textContent = `Coming straight from the bay is Ibraheem's halal mexican food!`;
    headerImage.src = Icon;

    header.appendChild(restaurantName);
    header.appendChild(restaurantType);
    header.appendChild(description);
    header.appendChild(headerImage);

    return header;

}

function initHomePage() {
    const root = document.getElementById('content');

}

document.body.appendChild(header());