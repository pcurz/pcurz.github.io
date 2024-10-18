document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.querySelector('.projects');
    const projects = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Desplazar un 100% por cada proyecto
        projectsContainer.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = projects.length - 1; // Volver al final si estamos en el primero
        }
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volver al primero si estamos en el último
        }
        updateCarousel();
    });
});
