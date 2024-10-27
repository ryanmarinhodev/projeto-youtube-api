import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://nodejs-study-production.up.railway.app', //https://nodejs-study-production.up.railway.app/ //http://localhost:4001
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: token,
  },
});

export default api;
