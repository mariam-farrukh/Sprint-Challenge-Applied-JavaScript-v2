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

const carouselContainer = document.querySelector('.carousel-container')

carouselContainer.appendChild(Carousel())

function Carousel(){
  const carousel = document.createElement('div')
  const carouselLBtn = document.createElement('div')
  const carouselImg1 = document.createElement('img')
  const carouselImg2 = document.createElement('img')
  const carouselImg3 = document.createElement('img')
  const carouselImg4 = document.createElement('img')
  const carouselRBtn = document.createElement('div')

  //add class elements
  carousel.classList.add('carousel')
  carouselLBtn.classList.add('left-button')
  carouselImg1.classList.add('img')
  carouselImg2.classList.add('img')
  carouselImg3.classList.add('img')
  carouselImg4.classList.add('img')
  carouselRBtn.classList.add('right-button')
  
  //add content
  carouselLBtn.textContent = ' < '
  carouselRBtn.textContent = ' > '
  carouselImg1.src = "./assets/carousel/mountains.jpeg"
  carouselImg2.src = "./assets/carousel/computer.jpeg"
  carouselImg3.src = "./assets/carousel/trees.jpeg" 
  carouselImg4.src = "./assets/carousel/turntable.jpeg"

  //append
  carousel.appendChild(carouselLBtn)
  carousel.appendChild(carouselImg1)
  carousel.appendChild(carouselImg2)
  carousel.appendChild(carouselImg3)
  carousel.appendChild(carouselImg4)
  carousel.appendChild(carouselRBtn)

  let carouselImgs = document.getElementsByClassName('img')
  let carouselIndex = 0
  carouselImg1.style.display = "block";

  // carouselLBtn.addEventListener('click', function clickLeft() {
  //   if ((carouselIndex- 1) < 0 ) {
  //       carouselIndex = carouselImgs.length-1;
  //   } else {
  //     carouselIndex -= 1;
  //   }
  //   Array.from(carouselImages).forEach(image => image.style.display = "none");
  //   carouselImages[carouselIndex].style.display = "block";
  // })

  // carouselRBtn.addEventListener('click', function clickRight() {
  //   if (carouselIndex>= carouselImgs.length) {
  //       carouselIndex = 0
  //   } else {
  //     carouselIndex += 1;
  //   }
  //   Array.from(carouselImages).forEach(image => image.style.display = "none");
  //   carouselImages[carouselIndex].style.display = "block";
  // })

  return carousel
}