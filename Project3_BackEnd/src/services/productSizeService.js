import * as productSizeRepository from "../repositories/productSizeRepository";

export const createProductSizeService = async (body) => {
  try {
    const response = await productSizeRepository.createProductSize(body);
    return {
      success: response[1] === true ? true : false,
      message:
        response[1] === true
          ? "Create ProductSize successfully"
          : "ProductSize is available",
    };
  } catch (error) {
    return error;
  }
};

export const getAllProductSizeServices = async () => {
  try {
    const response = await productSizeRepository.getAllProductSize();

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    return error;
  }
};
// export const getOneProductServices = async ({ id }) => {
//   try {
//     const response = await productRepository.getOneProduct({ id });
//     if (response?.dataValues !== undefined) {
//       return {
//         success: true,
//         data: response?.dataValues,
//       };
//     } else {
//       return {
//         success: false,
//         message: "Product not found",
//       };
//     }
//   } catch (error) {
//     return error;
//   }
// };
