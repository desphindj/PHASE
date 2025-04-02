import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

let loadingCount = 0;
const setLoading = (isLoading) => {
  document.getElementById('loading-indicator').style.display = isLoading ? 'block' : 'none';
};

api.interceptors.request.use((config) => {
  loadingCount++;
  setLoading(true);
  config.headers['Authorization'] = 'Bearer your-token-here';
  return config;
}, (error) => {
  setLoading(false);
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  loadingCount--;
  if (loadingCount <= 0) setLoading(false);
  console.log('Response:', response.data);
  return response;
}, (error) => {
  loadingCount--;
  if (loadingCount <= 0) setLoading(false);
  if (error.response) {
    switch (error.response.status) {
      case 401:
        console.error('Unauthorized');
        break;
      case 404:
        console.error('Not Found');
        break;
      case 500:
        console.error('Server Error');
        break;
      default:
        console.error('Error:', error.message);
    }
  } else {
    console.error('Network Error:', error.message);
  }
  return Promise.reject(error);
});

export default api;
