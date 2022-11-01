const enumIcon = {
    "Sunny": "&#x2600",// ☀
    "Partly sunny": "&#x26C5",// ⛅
    "Overcast": "&#x2601",// ☁
    "Rain": "&#x2614",// ☂
    "Degrees": "&#176"// °

};

function attachEvents() {
    console.log("TODO...");
    document.getElementById("submit").addEventListener("click", getWeather);
}

async function getWeather(){
    const url = "http://localhost:3030/jsonstore/forecaster/locations";
    const townName = document.getElementById("location").value;

    const response = await fetch(url);
    const data = await response.json();

    const info = data.find(x => x.name === townName);

    createForecaster(info.code);
}

async function createForecaster(code){
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const responseToday = await fetch(urlToday);
    const dataToday = await responseToday.json();

    const responseUpcoming = fetch(urlUpcoming);
    const dataUpcoming = await responseUpcoming.json();

    createToday(dataToday);
}

function createToday(data){
    const {condition, high, low} = data.forecast;
    const conditionContainer = document.getElement("div");
    conditionContainer.classList.add("forecasts");

    const conditionIconSpan = document.createElement("span");
    conditionSpam.classLis.add("condition");
    conditionSpan.textContent = enumIcon[condition;]

    const conditionSpan = document.createElement("span");
    conditionSpan.classList.add("condition");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("forecast-data");
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement("span");
    tempSpan.classList.add("forecast-data");
    tempSpan.textContent = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;

    const conditionTxtSpan = document.createElement("span");
    conditionTxtSpan.classList.add("forecast-data");
    conditionTxtSpan.textContent = condition;


    conditionSpan.appendChild(nameSpan);
    conditionSpan.appendChild(tempSpan);
    conditionSpan.appendChild();
}
attachEvents();