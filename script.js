document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev-btn');
    const nextButton = document.querySelector('.carousel-next-btn');
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = carouselSlides.length - 1;
        } else if (index >= carouselSlides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const translateValue = -currentIndex * 100 + '%';
        carouselContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() {
            goToSlide(currentIndex - 1);
        });

        nextButton.addEventListener('click', function() {
            goToSlide(currentIndex + 1);
        });
    }

    // Para exibir a primeira imagem ao carregar a página
    goToSlide(0);
});