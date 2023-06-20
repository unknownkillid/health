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
    }
    else if (i === 1) {
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

let opened = false;
const logoTitle = document.getElementById('logoTitle')

const burgerButton = document.getElementById('burgerBtn')
burgerButton.addEventListener('click', () => {
    if (!opened) {
        burgerButton.classList.add('burgerTransform')
        burgerMenu.style.display = 'flex'
        setTimeout(() => {
            burgerMenu.classList.add('burgerIn')
            logoTitle.style.color = 'white'
        }, 200);
        opened = true;
    } else {
        burgerButton.classList.remove('burgerTransform')
        burgerMenu.classList.remove('burgerIn')
        setTimeout(() => {
            burgerMenu.style.display = 'none'
            logoTitle.style.color = 'black'
        }, 700);
        opened = false;
    }
})
const header = document.getElementById('header')
const burgerMenu = document.getElementById('burgerMenu')
let offset = pageYOffset;

window.addEventListener('scroll', () => {
    let currentPos = window.pageYOffset
    if (offset > currentPos) {
        header.classList.remove('transform')
    } else {
        header.classList.add('transform')
    }
    offset = currentPos;
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1136) {
        burgerButton.classList.remove('burgerTransform')
        burgerMenu.style.display = 'none'
        burgerMenu.classList.remove('burgerIn')
        logoTitle.style.color = 'black'
        opened = false;
    }
})

addEventListener('scroll', () => {
    console.log(offset)
    setInterval(() => {
        if (offset >= 150) {
            document.getElementById('secondtransition').classList.add('comeinAnimations')
        } if (offset >= 200) {
            document.getElementById('cards12').classList.add('come2')
            document.getElementById('cards21').classList.add('come2')
        } if  (offset >= 1319) {
            document.getElementById('imgContainer3').classList.add('come3')
            document.getElementById('textContainer3').classList.add('come3')
        } if (offset >= 2100) {
            document.getElementById('app').classList.add('come3')
            document.getElementById('textContainer3').classList.add('come3')
        }
    }, 1000);
})


