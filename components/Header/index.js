// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
// 
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());

function Header() {
    //create new elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    //structure of new elements
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    //set class names
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    //add text content
    headerDate.textContent = "March 28, 2019";
    headerTitle.textContent = "Lambda Times";
    headerTemp.textContent = "98°";

    return header
}
