function Menu(e) {
   
        let list = document.querySelector('ul');
       e.name === 'menu-outline'  ?
       (e.name = "close", list.classList.add('top-[110px]'), list.classList.add('opacity-100')) 
       :  
       (e.name = "menu-outline", list.classList.remove('top-[110px]'), list.classList.remove('opacity-100')) 
       
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'block';
}

prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlide();
});

updateSlide();