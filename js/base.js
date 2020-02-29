export const DOMelements = {
    app: document.querySelector('.app'),
    mainSection: document.querySelector('.main'),
    hamburger: document.querySelector('.hamburger'),
    navigation: document.querySelector('.navigation'),
    pageLogo: document.querySelector('.header__logo'),
    ctaButton: document.querySelector('.intro__button'),
    navigationLinks: [...document.querySelectorAll('.navigation__link')],
}

export function hamburgerClick() {
    DOMelements.hamburger.classList.toggle('hamburger--is-active');
    DOMelements.navigation.classList.toggle('navigation--is-active');
}

export function closeNavigation() {
    DOMelements.hamburger.classList.remove('hamburger--is-active');
    DOMelements.navigation.classList.remove('navigation--is-active');
}

export function scrollDown() {
    DOMelements.mainSection.scrollIntoView({behavior: 'smooth'});
}