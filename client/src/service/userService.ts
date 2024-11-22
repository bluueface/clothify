import axiosInstance from "../config/axiosConfig";
import { LoginRequest, UserInterface } from "../util/types";

export class UserService {
  static getAllUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      return response.data;
    } catch (error) {
      console.error("Get all users error", error);
      throw error;
    }
  };

  static getConnectedUser = async (userId: number) => {
    try {
      const response = await axiosInstance.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Get connected user error", error);
      throw error;
    }
  };

  static login = async (loginRequest: LoginRequest) => {
    try {
      const response = await axiosInstance.post("/users/login", loginRequest);
      return response.data;
    } catch (error) {
      console.error("Login error", error);
      throw error;
    }
  };

  static register = async (user: UserInterface) => {
    try {
      const response = await axiosInstance.post("/users", user);
      console.log("register success: ", response.data);
      return response.data;
    } catch (error) {
      console.error("Register error", error);
      throw error;
    }
  };
}
