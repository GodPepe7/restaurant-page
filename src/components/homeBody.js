import './homeBody.css'

const homeBody = () => {
    const homeBodyDiv = document.createElement('div');
    homeBodyDiv.className = 'home-body body';

    const heading = document.createElement('h2');
    heading.textContent = 'Original Italian Pizza';

    const flavorDiv = document.createElement('div');
    flavorDiv.className = 'flavor-div';

    const flavorText = document.createElement('p');
    flavorText.textContent = `Our restaurant takes pride in crafting 
    pizzas that are profoundly delicious and truly based on the rich 
    traditions of Italian culinary excellence.`;
    const quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = '- Trust me bro';

    flavorDiv.append(flavorText, quoteAuthor);
    homeBodyDiv.append(heading, flavorDiv);

    return homeBodyDiv;
};

export default homeBody;