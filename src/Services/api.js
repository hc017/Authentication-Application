import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://bffapi.biztel.ai:8080/api/auth', // Updated API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
