import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getAllUsers = () => api.get("/users");
export const createUser = (user) => api.post("/users", user);

export const getAllroles = () => api.get("/roles");
export const createRole = (role) => api.post("/roles", role);
