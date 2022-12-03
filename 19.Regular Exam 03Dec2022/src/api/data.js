import {del, get, post, put} from '../api/api.js' //this line is common for all exams

const endpoints = {
    'albums' : '/data/albums',
    'getAllAlbums' : '/data/albums?sortBy=_createdOn%20desc',
    'singleAlbum' : '/data/albums/',
}

export async function getAllAlbums(){
    return get(endpoints.getAllAlbums);
}

export async function createAlbum(data){
    return post(endpoints.albums, data);
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
