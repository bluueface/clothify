import axiosInstance from "../config/axiosConfig";
import { ProductInterface } from "../util/types";

export class ProductService {
  static getAllProducts = async (
    page: number,
    subCategoryId?: number,
    size = 5,
  ) => {
    try {
      const response = await axiosInstance.get("/products", {
        params: { subCategoryId, page, size },
      });
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

  static rateProduct = async (products: ProductInterface[]) => {
    try {
      const response = await axiosInstance.put("/products/rate", products);
      return response.data;
    } catch (error) {
      console.error("Rate products error", error);
      throw error;
    }
  };
}
