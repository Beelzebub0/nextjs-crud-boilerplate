import axios from 'axios';

const API_URL = 'http://localhost:8091';

export const fetchAreas = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/area`);
      return response.data;
    } catch (error) {
      console.error('Error fetching areas:', error.message);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up request:', error.message);
      }
      throw error;
    }
  };

export const createArea = async (areaData) => {
  const response = await axios.post(`${API_URL}/api/v1/area`, areaData);
  return response.data;
};

export const updateArea = async (id, areaData) => {
  const response = await axios.put(`${API_URL}/api/v1/area/${id}`, areaData);
  return response.data;
};

export const deleteArea = async (id) => {
  const response = await axios.delete(`${API_URL}/api/v1/area/${id}`);
  return response.data;
};
