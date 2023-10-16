import * as services from "../services";

export const createSizeController = async (req, res) => {
  try {
    const response = await services.createSizeService(req.body);
    // console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllSizeController = async (req, res) => {
  try {
    const response = await services.getAllSizeServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getOneSizeController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await services.getOneSizeServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Size not found",
      });
    }
    return { error: "error" };
  }
};
export const updateSizeController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.updateSizeServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Size not found",
      });
    }
    return { error: "error" };
  }
};
export const deleteSizeController = async (req, res) => {
  try {
    const { id } = req.user;
    const response = await services.deleteSizeServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Size not found",
      });
    }
    return { error: "error" };
  }
};
