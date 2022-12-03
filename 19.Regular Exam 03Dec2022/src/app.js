//import views
import { render, page } from "./lib.js";
import { getUserData } from "./util.js";
import { showCreate } from "./views/createView.js";
import { showDashboard } from "./views/dashboardView.js";
import { showDetails } from "./views/detailsView.js";
import { showHome } from "./views/homeView.js";
import { showLogin } from "./views/loginView.js";
import {updateNav} from './views/nav.js'
import { showRegister } from "./views/registerView.js";

//get main element for render
const main = document.querySelector('main');

//attached middle ware
page(decorateContext);

//create page routing
page('/', showHome);
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showDashboard);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', () => console.log('editView'));
 
updateNav();
page.start();

function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user){
        ctx.user = user;
    }

    next();
}

function renderMain(content){
    render(content, main);
}