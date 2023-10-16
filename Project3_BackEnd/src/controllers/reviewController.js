import * as services from "../services";

export const createReviewController = async (req, res) => {
  try {
    const response = await services.createReviewService(req.body);
    // console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllReviewsController = async (req, res) => {
  try {
    const response = await services.getAllReviewsServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getOneReviewController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await services.getOneReviewServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Review not found",
      });
    }
    return { error: "error" };
  }
};
export const updateReviewController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.updateReviewServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Review not found",
      });
    }
    return { error: "error" };
  }
};
export const deleteReviewController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteReviewServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Review not found",
      });
    }
    return { error: "error" };
  }
};
