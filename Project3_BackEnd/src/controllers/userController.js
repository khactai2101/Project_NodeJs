import * as services from "../services";

export const getAllUserController = async (req, res) => {
  try {
    const response = await services.getAllUserServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getOneUserController = async (req, res) => {
  try {
    const { id } = req.user;

    const response = await services.getOneUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
    return { error: "error" };
  }
};
export const updateUserController = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.updateUserServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
    return { error: "error" };
  }
};
export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }
    return { error: "error" };
  }
};
