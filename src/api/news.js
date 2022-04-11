import { request } from './utils';

export default {
    getNews(page) {
        return page ? request('get', `/trending/all/day`, `&page=${page}`) : request('get', '/trending/all/day');
    },

    getFilm(id) {
        return request('get', `/movie/${id}`, '&language=en-US')
    }
}


