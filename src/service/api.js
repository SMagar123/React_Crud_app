import axios from "axios";
const API_URL = "http://127.0.0.1:3005/users";
export const addUser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (e) {
    console.log("Error while ", e.message);
  }
};
export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.error(error);
  }
};
export const getSingleUser = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.error(error);
  }
};
export const editUser = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (e) {
    console.log("Error while ", e.message);
  }
};
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (e) {
    console.log("Error deleting user", e.message);
  }
};
