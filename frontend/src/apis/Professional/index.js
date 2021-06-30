import api from "../../services/api";

export const getAllProfessionals = () => api.get("/professional");

export const getProfession = ({ id }) => api.get(`/profession/${id}`);