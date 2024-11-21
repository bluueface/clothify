import { CategoryInterface } from "../util/types";
import axiosInstance from "../config/axiosConfig";

export class CategoryService {
  static getAllCategories = async (): Promise<CategoryInterface[]> => {
    try {
      const response =
        await axiosInstance.get<CategoryInterface[]>("/categories");
      return response.data;
    } catch (error) {
      console.error("Get all categories error", error);
      throw error;
    }
  };

  static getCategoryById = async (id: number): Promise<CategoryInterface> => {
    try {
      const response = await axiosInstance.get<CategoryInterface>(
        `/categories/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Get categories error", error);
      throw error;
    }
  };
}
