import './header.css';
import Logo from '../imgs/logo.png'

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
    const homeLiA = document.createElement('a');
    homeLiA.id = 'home-nav'
    homeLiA.textContent = 'Home';
    homeLi.append(homeLiA);
    
    const menuLi = document.createElement('li'); 
    const menuLiA = document.createElement('a');
    menuLiA.id = 'menu-nav'
    menuLiA.textContent = 'Menu';
    menuLi.append(menuLiA);

    const contactLi = document.createElement('li');
    const contactLiA = document.createElement('a');
    contactLiA.id = 'contact-nav'
    contactLiA.textContent = 'Contact';
    contactLi.append(contactLiA);

    navUl.append(homeLi, menuLi, contactLi);

    headerDiv.append(navUl);

    return headerDiv;
};




export default header;