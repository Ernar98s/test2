import axios from 'axios';

const API_KEY = 'b9d08bd92619160ac6a36efad88c3094';
const API_URL = 'https://api.themoviedb.org/3'

export const IMG_PATH = 'https://image.tmdb.org/t/p/original'

const instance = axios.create({ baseURL: API_URL });


export const request = (method, url, options, data = {},) => {
    let responseType = 'json';
    return instance({
        method, url: `${url}?api_key=${API_KEY}${options}`, ...data, responseType, headers: { ...options.headers },
    });
};


