import page from "../node_modules/page/page.mjs"

import {catalogView} from './views/catalog.js';
import {createView} from './views/createView.js';
import {detailsView} from './views/detailsView.js';
import {editView} from './views/editView.js';
import {loginView} from './views/loginView.js';
import {myFurnitureView} from './views/myFurnitureView.js';
import {registerView} from './views/registerView.js';

page("/", catalogView);
page("/catalog", catalogView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/login", loginView);
page("/my-furniture", myFurnitureView);
page("/register", registerView);
page("/*", catalogView);