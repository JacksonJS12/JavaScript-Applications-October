import {del ,get, post, put} from '../api/api.js' //this line is common for all exams

const endpoints = {
    'albums' : '/data/albums',
    'getAllAlbums' : '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    'singleAlbum' : '/data/albums/',
    'search' : '/data/albums?where=name'
}

export async function createAlbum(data){
    return post(endpoints.albums, data);
}

export async function getAllAlbums(){
    return get(endpoints.getAllAlbums);
}

export async function getDetailsById(id){
    return get(endpoints.albums + "/" + id);
}

export async function deleteAlbumById(id){
    return del(endpoints.singleAlbum + '/' + id);
}


export async function updateAlbum(id, data){
    return put(endpoints.singleAlbum + id, data)    
}

export async function searchAlbum(query){
    return get(endpoints.search + encodeURIComponent(`'LIKE "${query}"'`))
}