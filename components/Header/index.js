// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div')
    header.classList.add('header')
    
    const spanTop = document.createElement('span')
    spanTop.classList.add('date')
    spanTop.textContent = 'MARCH 28, 2019'

    const h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'

    const spanBottom = document.createElement('span')
    spanBottom.classList.add('temp')
    spanBottom.textContent = '98°'
    
    header.appendChild(spanTop)
    header.appendChild(h1)
    header.appendChild(spanBottom)

    return header;
}

const headerContainer = document.querySelector(".header-container")
headerContainer.appendChild(Header())

