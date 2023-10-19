import * as services from "../services/orderItemService";

export const createOrderItem = async (req, res) => {
  console.log(req.user);
  try {
    const { id } = req.user;
    const response = await services.createOrderItem({ id });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getOneOrderItemByUser = async (req, res) => {
  try {
    const { id } = req.user;

    const response = await services.getOneOrderItemServices(id);
    if (response.length === 0) {
      return res.status(200).json({ message: "No items in the cart." });
    }
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

export const getAllOrderItemController = async (req, res) => {
  try {
    const response = await services.getAllOrderItemService();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};
