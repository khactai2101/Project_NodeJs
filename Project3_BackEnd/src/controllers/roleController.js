import * as services from "../services";

export const createRole = async (req, res) => {
  try {
    const response = await services.createRoleService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllRole = async (req, res) => {
  try {
    const response = await services.getAllRoleServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getOneRole = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await services.getOneRoleServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Role not found",
      });
    }
    return { error: "error" };
  }
};
export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.updateRoleServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Role not found",
      });
    }
    return { error: "error" };
  }
};
export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteRoleServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Role not found",
      });
    }
    return { error: "error" };
  }
};
