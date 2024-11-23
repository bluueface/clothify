import axiosInstance from "../config/axiosConfig";

export class RatingService {
  static getAllRatings = async () => {
    try {
      const response = await axiosInstance.get("/ratings");
      return response.data;
    } catch (error) {
      console.error("Get all ratings error", error);
      throw error;
    }
  };

  static deleteRating = async (id: number) => {
    try {
      await axiosInstance.delete(`/ratings/${id}`);
    } catch (error) {
      console.error(`Delete rating with ID ${id} error`, error);
      throw error;
    }
  };
}
