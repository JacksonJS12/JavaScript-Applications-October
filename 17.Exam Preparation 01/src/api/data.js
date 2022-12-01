import { get, post } from "./api.js";

export async function getAll(){
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id){
    return get('/data/pets/' + id);
}

export async function createPet(petData){
    return post('/data/pets', petData)
}

export async function editPet(id, petData){
    return post('/data/pets' + id, petData)
}