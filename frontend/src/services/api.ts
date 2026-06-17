import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-site-biologia-1.onrender.com',
});