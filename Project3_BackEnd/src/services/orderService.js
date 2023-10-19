import * as orderItemRepository from "../repositories/orderItemRepository";
import * as orderRepository from "../repositories/orderRepository";

export const createOrderService = async (data) => {
  try {
    const dataOrderItem = await orderItemRepository.getAllOrderItem();

    const uniqueCodeOrders = [
      ...new Set(dataOrderItem.map((item) => item.codeOrderItem)),
    ];
    for (const item of uniqueCodeOrders) {
      const createOrder = {
        codeOrder: item,
        addressId: +data.addressId,
        paymentId: +data.paymentId,
        userId: data.userId,
      };
      const response = await orderRepository.createOrder(createOrder);
      return {
        success: response > 0 ? true : false,
        message:
          response > 0 ? "Create order successfully" : "Create order failed",
      };
    }
    // }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllOrderService = async () => {
  try {
    const response = await orderRepository.getAllOrderRepository();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

// export const getOrderByUser = async (id) => {
//   try {
//     const response = await repositories.getAllOrderByUserRepository(id);
//     return {
//       success: true,
//       data: response,
//     };
//   } catch (error) {
//     return error;
//   }
// };
