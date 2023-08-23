import './contactBody.css';
import Building from '../imgs/building.jpg'

const contactBody = () => {
    const contactBodyDiv = document.createElement('div');
    contactBodyDiv.className = 'contact-body';

    const openingTimesHeading = document.createElement('h2');
    openingTimesHeading.textContent = 'Opening Times';

    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Location';

    const timeTable = document.createElement('table');
    timeTable.className = 'time-table';
    
    const mondayRow = makeTableRow('Monday', '8:00-18:30');
    const tuesdayRow = makeTableRow('Tuesday', '8:00-18:30');
    const wednesdayRow = makeTableRow('Wednesday', '8:00-22:00');
    const thursdayRow = makeTableRow('Thursday', '8:00-22:00');
    const fridayRow = makeTableRow('Friday', '8:00-18:30');
    const saturdayRow = makeTableRow('Saturday', 'Closed');
    const sundayRow = makeTableRow('Sunday', 'Closed');
    timeTable.append(mondayRow, tuesdayRow, wednesdayRow, thursdayRow, 
        fridayRow, saturdayRow, sundayRow);

    const buildingImg = new Image();
    buildingImg.src = Building;
    buildingImg.className = 'building';

    const deliveryContainer = document.createElement('div');
    deliveryContainer.className = 'delivery-container';
    const deliveryText = document.createElement('p');
    deliveryText.textContent = 'Delivery Available!';
    const phoneNum = document.createElement('p');
    phoneNum.textContent = '0174 23515590';
    deliveryContainer.append(deliveryText, phoneNum);

    const addressContainer = document.createElement('div');
    addressContainer.className = 'address-container';
    const address = document.createElement('p');
    address.textContent = 'ThisStreetIsReal 69';
    const postalCode = document.createElement('p');
    postalCode.textContent = '69420 MineTown';
    addressContainer.append(address, postalCode);

    contactBodyDiv.append(openingTimesHeading, locationHeading, 
        timeTable, buildingImg, deliveryContainer, addressContainer);
    
    return contactBodyDiv;
};

const makeTableRow = (day, times) => {
    const tr = document.createElement('tr');
    const tdDay = document.createElement('td');
    const tdTimes = document.createElement('td');

    tdDay.textContent = day;
    tdTimes.textContent = times;
    tr.append(tdDay, tdTimes);
    return tr;
}

export default contactBody;