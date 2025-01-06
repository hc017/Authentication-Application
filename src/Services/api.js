import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const signUp = async (data) => {
  try {
    const response = await api.post("/signup", data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
