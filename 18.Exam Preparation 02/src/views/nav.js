import { logout } from '../api/user.js'
import {render, page, html} from '../lib.js'
import { getUserData } from '../util.js';

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html``;
export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav)
}

function onLogout(){
    logout();
    updateNav();
    page.redirect('/')
}