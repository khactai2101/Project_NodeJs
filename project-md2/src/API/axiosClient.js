import axios from "axios";
BaseAxios.get("/api/v1/user");
const BaseAxios = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
BaseAxios.defaults.withCredentials = true;

BaseAxios.interceptors.request.use(
  async (config) => {
    let token;
    try {
      token = await localStorage.getItem("token");
    } catch (e) {}

    if (token !== null) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// after send request
BaseAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default BaseAxios;
