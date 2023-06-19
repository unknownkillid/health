const carouselContainer = document.getElementById('carouselMain');
const leftButton = document.getElementById('leftBtn')
const RightButton = document.getElementById('rightBtn')

leftButton.addEventListener('click', () => {
    i--
    carouselContainer.classList.add('animated2')
    setTimeout(() => {
        carouselContainer.classList.remove('animated2')
    }, 1000);
})
RightButton.addEventListener('click', () => {
    i++
    carouselContainer.classList.add('animated')
    setTimeout(() => {
        carouselContainer.classList.remove('animated')
    }, 1000);
})

const dot1 = document.getElementById('dot1')
const dot2 = document.getElementById('dot2')
const dot3 = document.getElementById('dot3')
const dot4 = document.getElementById('dot4')

let i = 0
function carousel() {
    if (i === 0) {
        dot1.classList.add('black')
        dot2.classList.remove('black')
        dot3.classList.remove('black')
        dot4.classList.remove('black')
    } else if (i === 1) {
        dot1.classList.remove('black')
        dot2.classList.add('black')
        dot3.classList.remove('black')
        dot4.classList.remove('black')
    }
    else if (i === 2) {
        dot1.classList.remove('black')
        dot2.classList.remove('black')
        dot3.classList.add('black')
        dot4.classList.remove('black')
    }
    else if (i === 3) {
        dot1.classList.remove('black')
        dot2.classList.remove('black')
        dot3.classList.remove('black')
        dot4.classList.add('black')
    } else if (i > 3) {
        i = 0;
    } else if (i < 0) {
        i = 3;
    } 
    requestAnimationFrame(carousel)
}

carousel();