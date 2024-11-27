import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => axios.get(API_URL).then((res) => res.data);

export const addUser = (user) =>
  axios.post(API_URL, user).then((res) => res.data);

export const updateUser = (user) =>
  axios.put(`${API_URL}/${user.id}`, user).then((res) => res.data);

export const deleteUser = (id) =>
  axios.delete(`${API_URL}/${id}`).then((res) => res.data);
