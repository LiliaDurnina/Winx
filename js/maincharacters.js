document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const blocks = document.querySelectorAll('.character-block');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');

    let currentIndex = 0;
    const maxIndex = 4;

    function updateCarousel() {
        const blockWidth = blocks[0].offsetWidth + 40;
        const translateX = -currentIndex * blockWidth;
        track.style.transform = `translateX(${translateX}px)`;
        updateButtons();
    }

    function updateButtons() {
        if (prevBtn) {
            prevBtn.disabled = currentIndex === 0;
            prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        }

        if (nextBtn) {
            nextBtn.disabled = currentIndex >= maxIndex;
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    updateCarousel();
    window.addEventListener('resize', updateCarousel);

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const descriptionSection = entry.target;
                descriptionSection.classList.add('animated');

                const blocks = descriptionSection.querySelectorAll('.description-block');
                blocks.forEach(function (block, index) {
                    setTimeout(() => {
                        block.classList.add('animated');
                    }, index * 300);
                });

                observer.unobserve(descriptionSection);
            }
        });
    }, observerOptions);

    const descriptionSection = document.querySelector('.description-section');
    if (descriptionSection) {
        observer.observe(descriptionSection);
    }
});