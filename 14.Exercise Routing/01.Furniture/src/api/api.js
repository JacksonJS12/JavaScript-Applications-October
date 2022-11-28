const host = 'http://localhost:3030/';

async function request(url, option){
    try{
        const response = await fetch(host + url, option);
        if(!response){
            const err = await response.json();
            throw new Error(err.message);
        }
        try {
            const data = response.json();
            return data;
        } catch(error){
            alert(error.message)
            return error;
        }
    } catch(error){
        alert(error.message);
        return error;
    }
}

function getOption(method, body){
    const options = {
        method,
        headers: {}
    }
    
    const user = localStorage.getItem("userData");
    if(user){
        
    }

    if(body){
        options.headers["Content-Type"] = "Application/json";
        options["body"] = JSON.stringify(body);
    }
}