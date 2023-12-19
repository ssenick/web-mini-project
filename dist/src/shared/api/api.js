import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
// export const $api = axios.create({
//   baseURL: __API__,
//   headers: {
//     authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
//   }
// })
export var $api = axios.create({
    baseURL: __API__
});
$api.interceptors.request.use(function (config) {
    // const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
