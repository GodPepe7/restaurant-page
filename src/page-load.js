const loadPage = (html) => {
    const contentDiv = document.querySelector('#container');
    contentDiv.appendChild(html);
};

export default loadPage;