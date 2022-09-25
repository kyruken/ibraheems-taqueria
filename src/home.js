import Icon from './image0.jpeg';

export default function header() {
    const header = document.createElement('header');

    const restaurantType = document.createElement('h2');
    const description = document.createElement('p');
    const headerImage = new Image();

    restaurantType.textContent = 'Indian and Mexican Fusion';
    description.textContent = `Coming straight from the bay is Ibraheem's halal mexican food!`;
    headerImage.src = Icon;

    header.appendChild(restaurantType);
    header.appendChild(description);
    header.appendChild(headerImage);

    return header;

}
