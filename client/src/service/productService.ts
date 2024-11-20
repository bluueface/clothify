import axiosInstance from "../config/axiosConfig";
import { ProductInterface } from "../util/types";

export class ProductService {
  static getAllProducts = async (): Promise<ProductInterface[]> => {
    try {
      const response = await axiosInstance.get<ProductInterface[]>("/products");
      return response.data;
    } catch (error) {
      console.error("Get all products error", error);
      throw error;
    }
  };

  static getProductById = async (id: number): Promise<ProductInterface> => {
    try {
      const response = await axiosInstance.get<ProductInterface>(
        `/products/${id}`,
      );
      return response.data;
    } catch (error) {
      console.error("Get product error", error);
      throw error;
    }
  };
}
