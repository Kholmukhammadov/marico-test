const mobileHeader = document.querySelector('header.mobile');

const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');


burgerBtn.addEventListener('click', () => {
    mobileHeader.querySelector('.nav-wrapper').classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileHeader.querySelector('.nav-wrapper').classList.remove('active');
});