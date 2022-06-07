const API_KEY ='7eda2dd9df64fe79bea81a1776e4212a';
const BASE_URL ='https://api.openweathermap.org/data/2.5';

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL +  '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    console.log(url);
    return fetch(url)
        .then((res) => res.json())
        
};
const formatCurrentWeather = (data) => {
    const {
        coordinates: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } =data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}

}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ("weather", searchParams).then(formatCurrentWeather);

    return formattedCurrentWeather
}

export default getFormattedWeatherData;