const app = document.querySelector('.app');

const loadPage = (site) => {
    const page = new XMLHttpRequest();
    page.open('GET', `pages/${site}.html` , false);
    page.send();

    app.innerHTML = page.response;

    if (site === "FORUM") {
        const forumLogin = document.querySelector('.forum__login');
        const forumRegister = document.querySelector('.forum__register');

        const loginForm = document.querySelector('.forum__wrapper--log-in');

        forumLogin.addEventListener('click', () => loginForm.style.zIndex = '1');
        forumRegister.addEventListener('click', () => loginForm.style.zIndex = '-1');
    }
}
loadPage('homepage');

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

ctaButton.addEventListener('click', () => {
    mainSection.scrollIntoView({behavior: 'smooth'});
})

const navigationLinks = [...document.querySelectorAll('.navigation__link')];

navigationLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        let selectedItem = e.target.innerHTML;
        loadPage(selectedItem);
        hideNavigation();
    });
})