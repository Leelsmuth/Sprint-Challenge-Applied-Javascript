/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
 function carouselFunc() {
   const firstDiv = document.createElement('div')
   firstDiv.classList.add('carousel')

   const secondDiv = document.createElement('div')
   secondDiv.classList.add('left-button')
   secondDiv.append('<')
   

   const firstImg = document.createElement('img')
   firstImg.src = './assets/carousel/mountains.jpeg'

   const secondImg = document.createElement('img')
   secondImg.scr = './assets/carousel/computer.jpeg'

   const thirdImg = document.createElement('img')
   thirdImg.scr = './assets/carousel/trees.jpeg'

   const fourthImg = document.createElement('img')
   fourthImg.scr = './assets/carousel/turntable.jpeg'

   const thirdDiv = documen.createElement('div')
   thirdDiv.classList.add('right-button')


   firstDiv.appendChild(secondDiv)
   firstDiv.appendChild(firstImg)
   firstDiv.appendChild(secondImg)
   firstDiv.appendChild(thirdImg)
   firstDiv.appendChild(fourthImg)
   firstDiv.appendChild(thirdDiv)

   return firstDiv;
 }

 const carouselContainer = document.querySelector('.carousel-container')
 carouselContainer.appendChild(carouselFunc())