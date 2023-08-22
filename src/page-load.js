const loadPage = (html) => {
    const contentDiv = document.querySelector('#container');
    console.log(contentDiv)
    contentDiv.appendChild(html);
};

export default loadPage;