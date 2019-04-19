import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/';
const APPID = '39ed2e14db7bdc4c52d143c2c44dbfa5';
const units = 'metric';

const api = axios.create({
  baseURL,
  params: {
     APPID,
     units
   }
});

export default api
