<!--
import axios from 'axios';

// const BASE_URL = 'https://railstutorialapi.herokuapp.com/api';
const BASE_URL = 'http://localhost:3001/api';

// var BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://localhost:3001/api';
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'https://railstutorialapi.herokuapp.com/api';
// }

// switch(process.env.NODE_ENV) {
//   case "production":
//     BASE_URL = 'https://railstutorialapi.herokuapp.com/api';
//     break;
//   case "development":
//     BASE_URL = 'http://localhost:3000/api';
//     break;
//   default:
//     BASE_URL = 'https://railstutorialapi.herokuapp.com/api';
// }

export default class API {
    constructor(lang = 'EN') {
        this.lang = lang;
    }
    getHttpClient(baseURL = `${BASE_URL}`) {
        var headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-lang': this.lang
        }
        if (localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined') {
            headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }
        setTimeout(function(){localStorage.removeItem("token");}, 1000*60*60);
        this.client = axios.create({
            baseURL: baseURL,
            headers: headers
        })
        return this.client;
    }
}
-->
