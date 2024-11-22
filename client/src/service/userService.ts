import axiosInstance from "../config/axiosConfig";
import { LoginRequest } from "../util/types";

export class UserService {
  static getAllUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      console.log("users: ", response.data);
      return response.data;
    } catch (error) {
      console.error("Get all users error", error);
      throw error;
    }
  };

  static getConnectedUser = async (userId: number) => {
    try {
      const response = await axiosInstance.get(`/users/${userId}`);
      console.log("connected user: ", response.data);
      return response.data;
    } catch (error) {
      console.error("Get all users error", error);
      throw error;
    }
  };

  static login = async (loginRequest: LoginRequest) => {
    try {
      const response = await axiosInstance.post("/users/login", loginRequest);
      console.log("login success: ", response.data);
      return response.data;
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  };
}
