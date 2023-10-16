import * as services from "../services";

export const createBrandController = async (req, res) => {
  try {
    const response = await services.createBrandService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllBrandController = async (req, res) => {
  try {
    const response = await services.getAllBrandServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getOneBrandController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await services.getOneBrandServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Brand not found",
      });
    }
    return { error: "error" };
  }
};
export const updateBrandController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.updateBrandServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Brand not found",
      });
    }
    return { error: "error" };
  }
};
export const deleteBrandController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteBrandServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Brand not found",
      });
    }
    return { error: "error" };
  }
};
