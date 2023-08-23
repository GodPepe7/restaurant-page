import contentDiv from "./contentDiv.css"
import pageLoad from "./page-load";
import headerDiv from "./components/header";
import homeBody from "./components/homeBody";
import menuBody from "./components/menuBody";
import contactBody from "./components/contactsBody";

pageLoad(headerDiv());
const body = document.createElement('div');
body.className = 'body';
body.append(homeBody());
pageLoad(body)

const homeNav = document.getElementById('home-nav');
const menuNav = document.getElementById('menu-nav');
const contactNav = document.getElementById('contact-nav');

homeNav.addEventListener('click', () => {
    body.replaceChildren(homeBody());
});

menuNav.addEventListener('click', () => {
    body.replaceChildren(menuBody());
});

contactNav.addEventListener('click', () => {
    body.replaceChildren(contactBody());
});