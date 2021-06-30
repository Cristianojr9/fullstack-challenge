import api from "../../services/api";

export const getAllProfessionals = () => api.get("/professional");

export const getProfessional = ({ id }) => api.get(`/professional/${id}`);

export const createProfessional = (data) => api.post("/professional", data);

export const updateProfessional = (data, id) => api.put(`/professional/${id}`, data);