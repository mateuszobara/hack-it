const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--is-active');
    navigation.classList.toggle('navigation--is-active');
})