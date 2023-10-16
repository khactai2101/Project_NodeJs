import * as services from "../services";

export const createAddressController = async (req, res) => {
  try {
    const response = await services.createAddressService(req.body, req.user.id);

    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
export const getAllAddressController = async (req, res) => {
  try {
    const response = await services.getAllAddressServices();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getAllAddressByUserController = async (req, res) => {
  try {
    const { id } = req.user;
    const response = await services.getAllAddressByUserServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getOneAddressController = async (req, res) => {
  try {
    const { id } = req.user;

    const response = await services.getOneAddressServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Address not found",
      });
    }
    return { error: "error" };
  }
};
export const updateAddressController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.updateAddressServices(id, req.body);
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Address not found",
      });
    }
    return { error: "error" };
  }
};
export const deleteAddressController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteAddressServices({ id });
    return res.status(200).json(response);
  } catch (error) {
    if (error.success === false) {
      return res.status(404).json({
        error: true,
        message: "Address not found",
      });
    }
    return { error: "error" };
  }
};
