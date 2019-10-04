// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //******element in html folder with class .header-container */
    const container = document.querySelector('.header-container');
    
    //******************************************   Making the element */
    const header = document.createElement('div'),
          date = document.createElement('span'),
          title = document.createElement('h1'),
          temp = document.createElement('span');

     //********************************* adding class to the element */
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //*********************************adding the text in element */
    date.textContent = 'MARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98\xB0'

    //************************adding where each element go in page */
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

     //*****************  return the card attached to header class in html */
    return container.appendChild(header);
}

//run the function
Header();
