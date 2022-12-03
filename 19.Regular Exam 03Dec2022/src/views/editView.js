import { getDetailsById, updateAlbum } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemp = (album, handler) => html`

`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const album = await getDetailsById(id);

    ctx.render(editTemp(album, createSubmitHandler(onEdit)));

    async function onEdit(data) {
        const {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        } = data;
        if (!name || !imgUrl || !price || !releaseDate || !artist || !genre || !description) {
            return alert("all fields are required")
        }
       await updateAlbum(id, data);
       ctx.page.redirect(`/details/${id}`);
    }
}