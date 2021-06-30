import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3334"
})

api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.patch["Content-Type"] = "application/json";
api.defaults.headers.get["Content-Type"] = "application/json";

export default api;