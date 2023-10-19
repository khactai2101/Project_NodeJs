import * as cartRepository from "../repositories/cartRepository";

export const createCartService = async (body) => {
  try {
    const response = await cartRepository.createCart(body);

    return {
      message: response.message,
    };
  } catch (error) {
    return error;
  }
};

export const getAllCartServices = async () => {
  try {
    const response = await cartRepository.getAllCart();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const getCartByUser = async (id) => {
  try {
    const response = await cartRepository.getAllCartByUser(id);
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

export const deleteCart = async (id) => {
  console.log(id);
  try {
    const response = await cartRepository.deleteCart(id);
    return {
      message: "The cart is deleted",
    };
  } catch (error) {
    return error;
  }
};
