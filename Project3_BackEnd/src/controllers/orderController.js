import * as services from "../services/orderService";

export const createOrderController = async (req, res) => {
  try {
    const { id } = req.user;

    const data = {
      ...req.body,
      userId: id,
    };
    console.log("1212121", data);
    const response = await services.createOrderService(data);
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAllOrderController = async (req, res) => {
  try {
    const response = await services.getAllOrderService();
    return res.status(200).json(response);
  } catch (error) {
    // return internalServerError(res);
  }
};

// export const getAllOrderByUser = async (req, res) => {
//   try {
//     const { id } = req.user;
//     const response = await services.getOrderByUser({ id });
//     if (response.length === 0) {
//       return res.status(200).json({ message: "No items in the cart." });
//     }
//     return res.status(200).json(response);
//   } catch (error) {
//     // return internalServerError(res);
//   }
// };
