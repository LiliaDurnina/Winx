// Функция для плавной прокрутки к элементу
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Функция для прокрутки вверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Инициализация навигации
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки "Связаться с нами" в основном контенте
    const contactButton = document.querySelector('.header__content-buttons .button-empty');
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToElement('contacts');
        });
    }
    
    // Обработчик для ссылки "О нас" в навигации
    const aboutLinks = document.querySelectorAll('.header__nav-link[href="#contacts"]');
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToElement('contacts');
            
            // Закрываем бургер-меню если оно открыто на мобильных
            const burgerMenu = document.querySelector('.header__top');
            if (burgerMenu && burgerMenu.classList.contains('header__top--burger-open')) {
                burgerMenu.classList.remove('header__top--burger-open');
            }
        });
    });
    
    // Обработчик для кнопки в хедере
    const headerContactButton = document.querySelector('.header__top-button');
    if (headerContactButton) {
        headerContactButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToElement('contacts');
            
            // Закрываем бургер-меню если оно открыто на мобильных
            const burgerMenu = document.querySelector('.header__top');
            if (burgerMenu && burgerMenu.classList.contains('header__top--burger-open')) {
                burgerMenu.classList.remove('header__top--burger-open');
            }
        });
    }
});
