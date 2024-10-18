document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.querySelector('.projects');
    const projects = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentIndex = 0;
    let autoplayInterval;
    let userInteracted = false;

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

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }

    function resetAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            if (!userInteracted) nextSlide();
        }, 3000);
    }

    function handleUserInteraction() {
        userInteracted = true;
        if (autoplayInterval) clearInterval(autoplayInterval);
        setTimeout(() => {
            userInteracted = false;
            resetAutoplay();
        }, 15000);
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
        handleUserInteraction();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        handleUserInteraction();
    });

    const hammer = new Hammer(projectsContainer);

    hammer.on('swipeleft', () => {
        nextSlide();
        handleUserInteraction();
    });

    hammer.on('swiperight', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
        handleUserInteraction();
    });

    resetAutoplay();
});