import axios from "axios";

const api = axios.create({
  baseURL: "192.168.178.215:8000",
});

export default api;
