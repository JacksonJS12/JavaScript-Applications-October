import { getDetailsById } from '../api/data.js';
import { html } from '../lib.js'

const detailTemp = (album, isOwner) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${
                isOwner ?
                html `
                <div class="actionBtn">
                    <a href="/edit/${album._id}" class="edit">Edit</a>
                    <a href="#" class="remove">Delete</a>
                </div>` : nothing
            }
            
        </div>
    </div>
</section>
`

export async function showDetails(ctx){
    const id = ctx.params.id;
    const album = await getDetailsById(id)
    const isOwner = album._ownerId === ctx.user._id;
    ctx.render(detailTemp(album, isOwner));
}