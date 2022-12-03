import { html, nothing } from '../lib.js'
import { getAllAlbums } from '../api/data.js'

const cardTemp = (album) => html`
<!-- Display a li with information about every post (if any)-->

<li class="card">
    <img src=${album.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    
    <a class="details-btn" href="/details/${album._id}">Details</a>
</li>
`
const dashboardTemp = (albums) => html`
<section id="dashboard">
    <h2>Albums</h2>
     ${albums.length > 0 ?
        html 
        ` <ul class="card-wrapper">
            ${albums.map(album => cardTemp(album))}
         </ul>`
            
         :
        html `
            <h2>There are no albums added yet.</h2>
        `
     }
</section>
`;

export async function showDashboard(ctx) {
    const allAlbums = await getAllAlbums();
    ctx.render(dashboardTemp(allAlbums));
}

