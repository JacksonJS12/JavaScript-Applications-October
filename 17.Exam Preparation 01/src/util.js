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