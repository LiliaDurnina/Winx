const button = document.getElementsByClassName('header__top-button')[0];
const container = document.querySelector('.stars_container');
/*Для класса тут нужна точка всегда! */

/*Math.random()  - рандом от 0 до 1, 1 не включ.*/

button.addEventListener('click', () => {
    const colors = ['#78C9DE', '#F49740', '#D93773', '#33833A', '#E50E4B', '#72569A'];
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDuration = (0.5 + Math.random() * 1) + 's';
        star.style.animationDelay = (Math.random() * 0.5) + 's';
        const size = 3 + Math.random() * 6; 

        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(star);
        /* уадление после паденияя*/
        star.addEventListener('animationend', () => {
        star.remove();
        });
    }
});

document.getElementsByClassName('burger')[0].addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementsByClassName('header__top')[0].classList.toggle('header__top--burger-open');
});


const accordLinks = document.getElementsByClassName('section2__accor-link');

for (let i = 0; i < accordLinks.length; i++) {
    accordLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('section2__accor-link-active');
        
        const textElement = this.querySelector('.section2_accord-text');
        if (textElement) {
            textElement.classList.toggle('show');
        }
    });
}