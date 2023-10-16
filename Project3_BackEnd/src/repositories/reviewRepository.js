import db from "../models";

export const createReview = async (comment, rating, productId, userId) => {
  try {
    const response = await db.Review.findOrCreate({
      where: { comment, rating, productId, userId },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllReview = async () => {
  try {
    const response = await db.Review.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
