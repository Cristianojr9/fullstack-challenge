import api from "../../services/api";

export const getAllProfessions = () => api.get("/profession");

export const getProfession = ({ id }) => api.get(`/profession/${id}`);

export const createProfession = (data) => api.post("/profession", data);

export const updateProfession = (data, id) => api.put(`/profession/${id}`, data);