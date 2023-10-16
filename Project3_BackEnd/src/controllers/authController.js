import * as services from "../services";

export const registerController = async (req, res) => {
  try {
    const response = await services.registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const loginController = async (req, res) => {
  try {
    const response = await services.loginUserServices(req.body);
    return res.status(200).json(response);
  } catch (error) {
    // return handleError.internalServerError(res);
  }
};
