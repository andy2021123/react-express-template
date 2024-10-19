import Axios from "axios";
import { User } from "types";

const axios = Axios.create({
  baseURL: "/api",
});

const api = {
  hello: async () => axios.get<{ message: string }>("/hello"),
  getUsers: async () => axios.get<User[]>("/users"),
  createUser: async (data: User) => axios.post("/user", data),
};

export default api;
