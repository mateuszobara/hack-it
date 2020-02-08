const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--is-active');
    navigation.classList.toggle('navigation--is-active');
})

const ctaButton = document.querySelector('.intro__button');
const mainSection = document.querySelector('.main');

ctaButton.addEventListener('click', () => {
    mainSection.scrollIntoView({behavior: 'smooth'});
})