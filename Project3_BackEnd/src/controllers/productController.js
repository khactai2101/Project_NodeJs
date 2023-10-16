import * as services from "../services";

export const createProductController = async (req, res) => {
  try {
    const response = await services.createProductService(req.body);
    // console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllProductController = async (req, res) => {
  try {
    const response = await services.getAllProductServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getOneProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await services.getOneProductServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Product not found",
      });
    }
    return { error: "error" };
  }
};
export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.updateProductServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Product not found",
      });
    }
    return { error: "error" };
  }
};
export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteProductServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Product not found",
      });
    }
    return { error: "error" };
  }
};
