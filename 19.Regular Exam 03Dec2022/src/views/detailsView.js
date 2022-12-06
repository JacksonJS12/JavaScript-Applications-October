import { deleteAlbumById, getDetailsById, like } from '../api/data.js';
import { html, nothing } from '../lib.js'

const detailsTemp = (album, isOwner, onDelete, isReg) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">0</span></div>

        <!--Edit and Delete are only for creator--> 
        ${ 
            isOwner ?
            html `
            <div id="action-buttons">
                <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
            ` : nothing
        }

        ${
            isReg ?
            html `
            <div id="action-buttons">
            <a @click=${hideButton} href="" id="like-btn">Like</a>
            </div>
            
            ` : nothing
        }
    </div>
</section>
`

export async function hideButton(){
    let btn = document.getElementById('like-btn');
    btn.style.display = 'none';
}

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const album = await getDetailsById(id)
    const isOwner = album._ownerId === ctx?.user?._id;
    const isReg = ctx?.user?._id !== undefined && album?._ownerId !== ctx?.user?._id;
    ctx.render(detailsTemp(album, isOwner, onDelete, isReg));

    async function onDelete() {
        const userConfirm = confirm("are you sure?")
        if (!userConfirm) {
            return
        }
        await deleteAlbumById(id);
        ctx.page.redirect('/dashboard')
    }
    
}