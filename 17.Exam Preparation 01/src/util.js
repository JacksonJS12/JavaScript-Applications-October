export function getUserData(){
    const data = JSON.parse(sessionStorage.getItem('userData'))
    return data;
}

export function setUserData(){
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData(){
    sessionStorage.removeItem('userData')
}

export function createSumbimtHandler(callback){
    return function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data);
    }
}