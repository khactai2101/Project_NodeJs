import * as services from "../services/cartService";

export const createCart = async (req, res) => {
  try {
    const { id } = req.user;

    const data = {
      ...req.body,
      userId: id,
    };
    // console.log(data);
    const response = await services.createCartService(data);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getAllCart = async (req, res) => {
  try {
    const response = await services.getAllCartServices();
    if (response.length === 0) {
      return res.status(200).json({ message: "No items in the cart." });
    }
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getAllCartByUser = async (req, res) => {
  try {
    const { id } = req.user;
    const response = await services.getCartByUser({ id });
    if (response.length === 0) {
      return res.status(200).json({ message: "No items in the cart." });
    }
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteCart(id);
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
