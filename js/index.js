import { homepage } from "../pages/homepage.js";
import { services } from "../pages/services.js";
import { pricing } from "../pages/pricing.js";
import { contact } from "../pages/contact.js";
import { forum } from "../pages/forum.js";

import { DOMelements, hamburgerClick, closeNavigation, scrollDown } from "./base.js";

function loadPage(page) {
    DOMelements.app.innerHTML = eval(page);

    if (page === 'forum') {
        const forumLogin = document.querySelector('.forum__login');
        const forumRegister = document.querySelector('.forum__register');

        const loginForm = document.querySelector('.forum__wrapper--log-in');

        forumLogin.addEventListener('click', () => loginForm.style.display = 'flex');
        forumRegister.addEventListener('click', () => loginForm.style.display = 'none');
    }
}

function moveToPage(e) {
    let site = (e.target.innerHTML).toLowerCase();
    loadPage(site);
    closeNavigation();
}

DOMelements.pageLogo.addEventListener('click', () => {
    loadPage('homepage');
    closeNavigation();
})

DOMelements.ctaButton.addEventListener('click', scrollDown);
DOMelements.hamburger.addEventListener('click', hamburgerClick);
DOMelements.navigationLinks.forEach((link) => link.addEventListener('click', moveToPage));