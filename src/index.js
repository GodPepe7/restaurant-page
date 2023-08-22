import pageLoad from "./page-load";
const contentDiv = document.querySelector('#container');
console.log(contentDiv)
const h1 = document.createElement('h1');
h1.textContent = 'test';
pageLoad(h1);