const API_KEY ='d4e93987cc437b20e208c4f64ebf0e21';
const BASE_URL ='https://api.openweathermap.org/data/2.5';

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL +  '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})
};