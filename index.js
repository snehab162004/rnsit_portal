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

// form validation

const studUsn = document.getElementById("usn").value;
const studEmail = document.getElementById("email").value;

const usnFormat = /^\d{1}[a-zA -Z]{2}\d{2}[a-zA-Z]{2}\d{3}$/;
const emailFormat = /^\d{1}[a-zA-Z]{2}\d{2}[a-zA-Z]{2}\d{3}\.[a-zA-Z]+@rnsit\.ac\.in$/

if(!usnFormat.test(studUsn)) {
 alert('Usn Format is incorrect') 
} 

if(!emailFormat.test(studEmail)) {
    alert('Email Format is incorrect') 
   } 