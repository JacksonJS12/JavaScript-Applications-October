//import views

import { render } from "lit-html";
import { getUserData } from "./util";

//get main element for render
const main = ;

//attached middle ware
page(decorateContext);

//create page routing

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