import db from "../models";
import * as cartItemRepository from "../repositories/cartItemRepository";

export const createCartItemService = async ({
  quantity,
  productSizeId,
  cartId,
}) => {
  try {
    const existingItem = await cartItemRepository.findCartItem(
      productSizeId,
      cartId
    );

    if (existingItem) {
      // If the product is already in the cart and is the same size, update the quantity
      const updatedCart = await cartItemRepository.updateCartItemQuantity(
        productSizeId,
        cartId,
        existingItem.quantity + +quantity
      );
      return {
        success: true,
        message: "Sản phẩm đã có trong giỏ hàng và có cùng kích thước",
        newCart: updatedCart,
      };
    } else {
      // If the product is not in the cart, create a new cart
      const newCartItem = await cartItemRepository.createCartItem({
        quantity,
        productSizeId,
        cartId,
      });
      return {
        success: true,
        message: "Sản phẩm đã được thêm vào giỏ hàng",
        newCart: newCartItem,
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllCartItemServices = async () => {
  try {
    const response = await cartItemRepository.getAllCartItem();
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};
export const getAllCartItemByUserServices = async ({ id }) => {
  try {
    const response = await cartItemRepository.getAllCartItemByUser(id);
    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};

// export const getOneCategoryServices = async ({ id }) => {
//   try {
//     const response = await categoryRepository.getOneCategory({ id });
//     if (response?.dataValues !== undefined) {
//       return {
//         success: true,
//         data: response?.dataValues,
//       };
//     } else {
//       return {
//         success: false,
//         message: "Category not found",
//       };
//     }
//   } catch (error) {
//     return error;
//   }
// };

// export const updateCategoryServices = async (id, body) => {
//   try {
//     const res = await categoryRepository.updateCategory(id, body);
//     if (res[0] === 0) {
//       return {
//         success: false,
//         message: `Category not found`,
//       };
//     } else {
//       return {
//         success: true,
//         message: `Category updated successfully`,
//       };
//     }
//   } catch (error) {
//     return error;
//   }
// };

// export const deleteCategoryServices = async ({ id }) => {
//   try {
//     const response = await categoryRepository.deleteCategory({ id });
//     if (response === 0) {
//       return {
//         success: false,
//         message: `Category not found`,
//       };
//     }
//     return {
//       success: response > 0 ? true : false,
//       message: `Delete Category successfully`,
//     };
//   } catch (error) {
//     return error;
//   }
// };
