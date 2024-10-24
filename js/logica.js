// Script para manejar el toggle del menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,  // Asegúrate de que solo un slide sea visible
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    
    });

// Función para hacer que los elementos aparezcan al hacer scroll
const fadeIns = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeIns.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
            }
        });
});

// Mostrar el botón solo cuando el usuario hace scroll
window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 100) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
};

// Función para volver al inicio al hacer clic
document.getElementById("back-to-top").addEventListener("click", function(event){
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
