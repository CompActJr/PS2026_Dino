
AOS.init({
    duration: 800, 
    once: true,    
    offset: 100    
});

const menuBtn = document.getElementById('menu-hamburguer');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', function() {
    menuMobile.classList.toggle('ativo');
});


const linkServicos = document.querySelector('.dropdown > a');

linkServicos.addEventListener('click', function(e) {
    
    if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('aberto');
    }
});

window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});