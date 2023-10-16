import * as reviewRepository from "../repositories/reviewRepository";

export const createReviewService = async ({
  comment,
  rating,
  productId,
  userId,
}) => {
  const response = await reviewRepository.createReview(
    comment,
    rating,
    productId,
    userId
  );
  try {
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Create Review successfully"
          : "Review is available",
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllReviewsServices = async () => {
  try {
    const response = await reviewRepository.getAllReview();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getOneReviewServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Review.findOne({
        where: { id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      if (response?.dataValues !== undefined) {
        resolve({
          success: true,
          data: response?.dataValues,
        });
      } else {
        resolve({
          success: false,
          message: "Review not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const updateReviewServices = (id, body) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await db.Review.update(body, {
        where: { id },
      });
      console.log(res);
      if (res[0] === 0) {
        reject({
          success: false,
          message: `Review not found`,
        });
      } else {
        resolve({
          success: true,
          message: `Review updated successfully`,
        });
      }
    } catch (error) {
      reject(error);
    }
  });

export const deleteReviewServices = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Review.destroy({
        where: { id },
      });
      if (response === 0) {
        resolve({
          success: false,
          message: `Review not found`,
        });
      }
      resolve({
        success: response > 0 ? true : false,
        message: `Delete Review successfully`,
      });
    } catch (error) {
      reject(error);
    }
  });
