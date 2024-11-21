import axiosInstance from "../config/axiosConfig";

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
}
