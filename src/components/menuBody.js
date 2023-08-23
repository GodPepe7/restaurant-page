import './menuBody.css';

const menuBody = () => {
    const menuBodyDiv = document.createElement('div');
    menuBodyDiv.className = 'menu-body body';

    const heading = document.createElement('h2');
    heading.textContent = 'Menu';
    heading.className = 'menu-heading'
    const dish1 = makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');
    const dish2 =makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');
    const dish3 =makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');
    const dish4 =makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');
    const dish5 = makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');
    const dish6 =makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');
    const dish7 =makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');
    const dish8 =makeDishItem('The Italian Special', 'Mozzarella, Tomatoes, Basil, Special Sauce', '$16,99');

    menuBodyDiv.append(heading, dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8);

    return menuBodyDiv;
};

const makeDishItem = (name, ingredients, price) => {
    const dishItem = document.createElement('div');
    const leftSide = document.createElement('div');
    const rightSide = document.createElement('div');
    dishItem.className = 'dish-item';
    leftSide.className = 'dish-left-side';
    rightSide.className = 'dish-right-side';
    const dishHeading = document.createElement('h3');
    dishHeading.textContent = name;
    const dishIngredients = document.createElement('p');
    dishIngredients.textContent = ingredients;
    leftSide.append(dishHeading, dishIngredients);
    const priceP = document.createElement('p');
    priceP.textContent = price;
    rightSide.append(priceP);
    dishItem.append(leftSide, rightSide);
    return dishItem;
};

export default menuBody;