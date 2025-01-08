import axios from 'axios'; // Import Axios library for making HTTP requests

// Create an Axios instance with predefined configuration
const instance = axios.create({
  // Base URL for all API requests
  baseURL: 'http://bffapi.biztel.ai:8080/api/auth', // Updated API base URL for authentication

  // Default headers to be included in every request
  headers: {
    'Content-Type': 'application/json', // Specify JSON as the content type
  },
});

// Export the Axios instance for use throughout the application
export default instance;
