import axiosInstance from "../config/axiosConfig";
import { OrderInterface } from "../util/types";

export class OrderService {
  static getBuyerOrders = async (userId: number) => {
    try {
      const response = await axiosInstance.get(`/orders/buyer/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Get user's orders error", error);
      throw error;
    }
  };

  static addOrder = async (
    newOrder: OrderInterface,
  ): Promise<OrderInterface> => {
    try {
      const response = await axiosInstance.post<OrderInterface>(
        "/orders",
        newOrder,
      );
      console.log("Order added successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Add order error", error);
      throw error;
    }
  };
}
