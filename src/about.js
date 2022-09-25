export default function aboutUs() {
    const aboutContainer = document.createElement('div');

    const aboutTitle = document.createElement('h2');
    const aboutDescription = document.createElement('p');

    aboutTitle.textContent = `Ibraheem's Taqueria is the first Indian Mexican Fusion
    restaurant to exist in the bay area.`;
    aboutDescription.textContent = `We want to bring halal first food with a mix of 
    Mexican food.`

    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutDescription);

    return aboutContainer;
}