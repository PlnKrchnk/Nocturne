const linksForImg = ['assets/images/development-container/development-1.png', 
    'assets/images/development-container/development-2.png', 
    'assets/images/development-container/development-3.png'];

const button1 = document.getElementById('next')
const changeImage = document.querySelector('.follow')

let i = 1

button1.addEventListener('click', () => {
    let imgSrc = changeImage.getAttribute('src');
    console.log(imgSrc)
    
    changeImage.src = linksForImg[i];
    i++;

    if (i > 2) {
            i = 0;
        } 
        
            
})


//burger menu
const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");
if (burgerBtn && nav) {
    burgerBtn.addEventListener('click', () =>{
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });
}

//скрол кнопка
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});