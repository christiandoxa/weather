import axios from 'axios';

const API_KEY = 'f3f466b78e3ab9257030578ca76ecf0f';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},id`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}