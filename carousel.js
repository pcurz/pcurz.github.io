document.addEventListener('DOMContentLoaded', function () {
    const AUTO_CHANGE_INTERVAL = 5000;
    const USER_INTERACTION_TIMEOUT = 15000;

    const projectsContainer = document.querySelector('.projects');
    const projects = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentIndex = 0;
    let autoplayInterval;
    let userInteracted = false;
    let isHovered = false;

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
        if (!isHovered) {
            currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }
    }

    function resetAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            if (!userInteracted) nextSlide();
        }, AUTO_CHANGE_INTERVAL);
    }

    function handleUserInteraction() {
        userInteracted = true;
        if (autoplayInterval) clearInterval(autoplayInterval);
        setTimeout(() => {
            userInteracted = false;
            resetAutoplay();
        }, USER_INTERACTION_TIMEOUT);
    }

    projectsContainer.addEventListener('mouseenter', () => {
        isHovered = true;
        clearInterval(autoplayInterval);
    });

    projectsContainer.addEventListener('mouseleave', () => {
        isHovered = false;
        resetAutoplay();
    });

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