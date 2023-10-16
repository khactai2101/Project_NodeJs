import db from "../models";

export const findCartItem = async (productSizeId, cartId) => {
  try {
    const existingItem = await db.CartItem.findOne({
      where: {
        productSizeId,
        cartId,
      },
    });
    return existingItem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createCartItem = async ({ quantity, productSizeId, cartId }) => {
  try {
    const newCartItem = await db.CartItem.create({
      quantity,
      productSizeId,
      cartId,
    });
    return newCartItem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateCartItemQuantity = async (
  productSizeId,
  cartId,
  quantity
) => {
  try {
    const updatedCartItem = await db.CartItem.update(
      { quantity },
      { where: { productSizeId, cartId } }
    );
    return updatedCartItem;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllCartItem = async () => {
  try {
    const response = await db.CartItem.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "productSizeId"], // bỏ những cái không cần thiết
      },
      include: [
        {
          model: db.ProductSize,
          as: "productSize",
          attributes: {
            exclude: ["createdAt", "updatedAt", "productId", "sizeId"],
          },
          include: [
            {
              model: db.Product,
              as: "product",
              attributes: {
                exclude: ["createdAt", "updatedAt", "categoryId", "brandId"],
              },
              include: [
                {
                  model: db.Category,
                  as: "category",
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
                {
                  model: db.Brand,
                  as: "brand",
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
              ],
            },
            {
              model: db.Size,
              as: "size",
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
        },
      ],
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllCartItemByUser = async (cartId) => {
  try {
    const response = await db.CartItem.findAll({
      where: { cartId },
      attributes: {
        exclude: ["createdAt", "updatedAt"], // bỏ những cái không cần thiết
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

// export const getOneById = async ({ id }) => {
//   try {
//     const response = await db.Brand.findOne({
//       where: { id },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const updateBrand = async (id, body) => {
//   try {
//     const response = await db.Brand.update(body, {
//       where: { id },
//     });

//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const deleteBrand = async ({ id }) => {
//   try {
//     const response = await db.Brand.destroy({
//       where: { id },
//     });
//     return response;
//   } catch (error) {
//     return error;
//   }
// };
