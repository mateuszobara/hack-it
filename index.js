const app = document.querySelector('.app');

const loadPage = (site) => {
    const page = new XMLHttpRequest();
    page.open('GET', `pages/${site}.html`, false);
    page.send();

    app.innerHTML = page.response;
}
loadPage('homepage');

const pageLogo = document.querySelector('.header__logo');

pageLogo.addEventListener('click', () => {
    loadPage('homepage');
    hideNavigation();
})

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--is-active');
    navigation.classList.toggle('navigation--is-active');
})

const hideNavigation = () => {
    hamburger.classList.remove('hamburger--is-active');
    navigation.classList.remove('navigation--is-active');
}

const ctaButton = document.querySelector('.intro__button');
const mainSection = document.querySelector('.main');

ctaButton.addEventListener('click', () => mainSection.scrollIntoView({behavior: 'smooth'}));

const navigationLinks = [...document.querySelectorAll('.navigation__link')];

navigationLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        let selectedItem = e.target.innerHTML;
        loadPage(selectedItem);
        hideNavigation();
    });
})