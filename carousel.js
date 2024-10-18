document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.querySelector('.projects');
    const projects = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentIndex = 0;

    projects.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        indicatorsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        const offset = -currentIndex * 100;
        projectsContainer.style.transform = `translateX(${offset}%)`;

        // Actualizar los puntos activos
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    const hammer = new Hammer(projectsContainer);

    hammer.on('swipeleft', () => {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    hammer.on('swiperight', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
    });
});
