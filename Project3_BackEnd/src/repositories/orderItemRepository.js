import db from "../models";
export const createOrderItemRepository = async (userId) => {
  console.log(userId);
  const cartItem = await db.Cart.findAll({
    where: { userId: userId.id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  if (!cartItem) {
    return { message: "Không tìm thấy mục trong giỏ hàng" };
  }
  console.log(cartItem);
  const min = 100000000;
  const max = 999999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const createOrder = cartItem.map((item) => ({
    productSizeId: item.productSizeId,
    codeOrderItem: randomNumber,
    quantity: item.quantity,
    userId: item.userId,
  }));
  // // Create a new order item with the data from the cart item
  const newOrderItem = await db.OrderItems.bulkCreate(createOrder);
  return newOrderItem;
};

export const getAllOrderItem = async () => {
  const data = await db.OrderItems.findAll({
    // include: [
    //   {
    //     model: db.Orders,
    //     as: "orderProduct",
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //   },
    // ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return data;
};

export const getOrderItemByUser = async (id) => {
  const data = await db.OrderItems.findAll({
    where: { userId: id },
    attributes: {
      exclude: ["createdAt", "updatedAt", "productId"],
    },
    // include: [
    //   {
    //     model: db.Carts,
    //     as: "carts",
    //     where: {
    //       userId: id,
    //     },
    //     attributes: {
    //       exclude: ["createdAt", "updatedAt"],
    //     },
    //   },
    // ],
    include: [
      {
        model: db.ProductSize,
        as: "productSize",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
  });

  return data;
};
