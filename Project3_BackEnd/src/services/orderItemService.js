import * as repository from "../repositories/orderItemRepository";
import * as cartRepository from "../repositories/cartRepository";

export const createOrderItem = async (id) => {
  try {
    // const getAllCartByUser = await cartRepository.getAllCartByUser(id);
    // const createOrder = getAllCartByUser.map((item) => ({
    //   quantity: item.quantity,
    // }));
    const response = await repository.createOrderItemRepository(id);
    return {
      data: response,
      message: response.message,
    };
  } catch (error) {
    throw error;
  }
};

export const getOneOrderItemServices = async (id) => {
  try {
    if (!id) {
      throw new Error("Bad request");
    }
    const response = await repository.getOrderItemByUser(id);
    if (response !== null) {
      return {
        success: true,
        data: response,
      };
    } else {
      return { success: false, message: "Not found" };
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllOrderItemService = async () => {
  try {
    const response = await repository.getAllOrderItem();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
