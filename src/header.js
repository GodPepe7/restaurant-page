import './header.css';
import Logo from './imgs/logo.png'

const header = () => {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    const leftSide = document.createElement('div');
    leftSide.className = 'left-side';

    const logo = new Image();
    logo.src = Logo;
    logo.className = 'logo'

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'PIZZERIA GUSTO ITALIANO';

    leftSide.append(logo, restaurantName);
    headerDiv.append(leftSide);

    const navUl = document.createElement('ul');
    const homeLi = document.createElement('li');
    homeLi.textContent = 'Home';
    const menuLi = document.createElement('li'); 
    menuLi.textContent = 'Menu';
    const contactLi = document.createElement('li');
    contactLi.textContent = 'Contact';
    navUl.append(homeLi, menuLi, contactLi);

    headerDiv.append(navUl);

    return headerDiv;
};




export default header;